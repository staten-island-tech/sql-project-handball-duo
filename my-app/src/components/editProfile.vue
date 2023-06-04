<!-- <script setup>
import { onMounted, ref, toRefs } from 'vue'
import { supabase } from '../lib/supabaseClient'

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const aboutMe = ref('')
const cards = ref([])

async function getProfile() {
  const { data } = await supabase.from('cards').select()
  cards.value = data
}

onMounted(() => {
  getProfile()
}) 
async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      aboutMe: aboutMe.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('cards').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="session.user.email" disabled />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="aboutMe">About Me</label>
      <input id="aboutMe" type="url" v-model="aboutMe" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>
  </form>
</template> -->
