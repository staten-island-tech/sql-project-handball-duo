<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Login</h1>
      <div>
        <input class="inputField" required type="email" placeholder="Email" v-model="logEmail" />
      </div>
      <div>
        <input
          class="inputField"
          required
          type="password"
          placeholder="Password"
          v-model="logPassword"
        />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loadLogin ? 'Logging in...' : 'Log In'"
          :disabled="loadLogin"
        />
      </div>
    </div>
  </form>

</template>
<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
const loadLogin = ref(false)
const logEmail = ref('')
const logPassword = ref('')

const handleLogin = async () => {
  console.log(logEmail.value)
  console.log(logPassword.value)
  try {
    loadLogin.value = true
    const { data, error } = await supabase.auth.signInWithPassword({
      email: logEmail.value,
      password: logPassword.value
    })
    if (error) {
      console.log(error)
      console.log(data)
    } else {
      console.log(data)
    }
  } finally {
    loadLogin.value = false
  }
}
</script>
