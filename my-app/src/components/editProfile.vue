<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useProductsStore } from '../lib/ProductStore'
import {storeToRefs} from "pinia"
const useProducts = useProductsStore()


const { loginData } = storeToRefs(useProducts)
const{ cards } = storeToRefs(useProducts)
const username = ref('')
const about = ref('')
const instagram = ref('')
const image = ref('')
const updates = ref('')
onMounted(() => {
  useProducts.getProfile()
})

async function updateProfile() {
  try {
    console.log(loginData.value.user.email)


    
    const updates = {
      id: cards.value.filter(function(e){
      return e.email === useProducts.email
    })[0].id,
      name: username.value,
      about: about.value,
      instagram: instagram.value,
      image: image.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('cards').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
 
  } 
  return updates
  console.log(updates.id)
}

</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="image">Image</label>
      <input id="image" type="url" v-model="image" />
    </div>
    <div>
      <label for="instagram">Instagram</label>
      <input id="instagram" type="text" v-model="instagram" />
    </div>
    <div>
      <label for="about">About Me</label>
      <input id="about" type="text" v-model="about" />
    </div>

    <div>
      <input type="submit" class="button primary block" />
    </div>
  </form>
<div>
  <!-- <article class="profile" v-for="something in  updates" :key="something.id" :image="something.image" :name="something.name" :instagram="something.instagram" :about="something.about" >
    <div class="profile-image"> 
      <img v-bind:src="something.image" alt="Person" />
    </div>
    <h2 class="profile-username">{{something.name}}</h2>
    <small class="profile-user-handle">@{{something.instagram}}</small>
    <p>{{ something.about }}</p>    
  </article> -->
  <h1>bi</h1>
</div>

</template>

<style>
.form-widget {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto; 
}
</style>