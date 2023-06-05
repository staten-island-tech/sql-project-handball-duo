<template>
  <form class="row flex-center flex" @submit.prevent="useProducts.handleLogin(logEmail, logPassword)">
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
import { useProductsStore } from '../lib/ProductStore';

const useProducts = useProductsStore()

const loadLogin = ref(false)
const logEmail = ref('')
const logPassword = ref('')



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


.header {
  text-align: center;
  margin-top: 0;
}

.inputField {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
}

.button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4B9CD3;
  color: #ffffff;
  cursor: pointer;
}

</style>