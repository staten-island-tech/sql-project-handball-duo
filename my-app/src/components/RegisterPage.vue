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
            aria-label="email"
          />
        </div>
        <div> 
          <input
       
            class="inputField"
            required
            type="password"
            placeholder="Password"
            v-model="regPass"
            aria-label="password"
          />
        </div>
        <div>
          <input
            class="inputField"
            required
            type="text"
            placeholder="Username"
            v-model="regUser"
            aria-label="username"
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
    const { data: usersData, } = await supabase
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
          await supabase
          .from('cards')
        .insert([{email: regEmail.value}])

        alert('Please check your email for confirmation.')
        await supabase
        
      }
    }
  } finally {
    loadReg.value = false
  }
}
</script>

<style >
body {
  font-family: Arial, sans-serif;
}

.row {
  display: flex;
  flex-direction: row;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.form-widget {
  max-width: 200px;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 1);
  background-color: #ffffff;
}

.inputField {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
}

.button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4B9CD3;
  color: black;
  cursor: pointer;
}

</style>