<template>
  <div>
   <form class="row flex-center flex" @submit.prevent="handleRegister">
      <div class="col-6 form-widget">
        <h1 class="header">Register</h1>
        <div>
          <input
            class="inputField"
            required
            type="email"
            placeholder="Email"
            v-model="regEmail"
          />
        </div>
        <div> 
          <input
       
            class="inputField"
            required
            type="password"
            placeholder="Password"
            v-model="regPass"
          />
        </div>
        <div>
          <input
            class="inputField"
            required
            type="text"
            placeholder="Username"
            v-model="regUser"
          />
        </div>
        <div>
          <input
            type="submit"
            class="button block"
            :value="loadReg ? 'Registering...' : 'Register'"
            :disabled="loadReg"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

const regEmail = ref('')
const regPass = ref('')
const regUser = ref('')
const loadReg = ref(false)



const handleRegister = async () => {
  try {
    loadReg.value = true
    // Check if user with the provided email already exists
    const { data: usersData, error: usersError } = await supabase
      .from('profiles')
      .select()
      .eq('email', regEmail.value)

    if (usersData && usersData.length > 0) {
      // User with the provided email already exists
      alert('Email has already been registered.')
    } else {
      const { data, error } = await supabase.auth.signUp({
        email: regEmail.value,
        password: regPass.value
      })

      if (error) {
        console.log(error)
      } else {
        console.log(data)

        // Insert the user's email and username into the users table
        await supabase
          .from('profiles')
          .insert([{ email: regEmail.value, username: regUser.value, password: regPass.value }])

        alert('Please check your email for confirmation.')
      }
    }
  } finally {
    loadReg.value = false
  }
}
</script>