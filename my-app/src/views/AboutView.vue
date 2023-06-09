<script></script>

<script setup>
import { onMounted, ref, toRefs } from 'vue'
import { supabase } from '../lib/supabaseClient'
import allProfiles from '../components/seeProfiles.vue'
import editProfile from '../components/editProfile.vue'
const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    let { data, error, status } = await supabase
      .from('cards')
      .select(`name, about`)
      .eq('id ::text' , user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      website.value = data.website
      avatar_url.value = data.avatar_url
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
const love = ref(true)
</script>

<template>
  <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
<RouterView/>

<allProfiles v-if="love"/>
<editProfile v-else/>
<button class="buttons" @click="love = !love" v-if="love">Edit Account</button>
<button class="buttons" @click="love = !love" v-else>Go Back</button>
</template>

<style>
.buttons{
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4B9CD3;
  color: black;
  cursor: pointer;
}
</style>