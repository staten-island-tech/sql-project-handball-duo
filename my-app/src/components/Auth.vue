<script>
export default {
  name: 'Auth'
}
</script>
<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

// const loading = ref(false)
// const email = ref('')

// const handleLogin = async () => {
//   try {
//     loading.value = true
//     const { error } = await supabase.auth.signInWithOtp({
//       email: email.value
//     })
//     if (error) throw error
//     alert('Check your email for the login link!')
//   } catch (error) {
//     if (error instanceof Error) {
//       alert(error.message)
//     }
//   } finally {
//     loading.value = false
//   }
// }
function yep(){
  console.log(input)
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <p class="description">Email:</p>
      <div>
        <input type="text" name="" id="">
      </div>
      <p class="description">Password</p>
      <div>
        <input type="password" id="password" name="password">
      </div>
      <button @click="yep()"> aga</button>
    </div>
  </form>
</template>
