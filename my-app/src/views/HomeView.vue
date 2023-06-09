<script>
export default {
  name: 'BeforePage'
}
</script>
<script setup>
import { RouterView } from 'vue-router'
import {ref} from  'vue'
import Login from  '../components/LoginPage.vue'
import Register from  '../components/RegisterPage.vue'
const changePlease = ref(true)
</script>

<template>
<h1>Meet People Yea Idk</h1>
  <RouterView/>
<Login v-if="changePlease"/>
<Register v-else />

<button class="buttons" @click="changePlease = !changePlease" v-if="changePlease">Change To Register</button>
<button class="buttons" @click="changePlease = !changePlease" v-else>Change To Login</button>

</template>

<style scoped>
.buttons{
  font-size: 2rem;
  padding: 12px 20px;
  margin: 0 10px;
  color: black;
  font-size: 24px;
  font-family: Arial, sans-serif;
  margin-top: 20px;
  display: flex;
  justify-content: center; 
}
h1{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.register{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
}
.login{
  margin-top: 20px;
  display: flex;
  justify-content: center;  
}

.button {
  padding: 10px 20px;
  margin: 0 10px;
  color: black;
  font-size: 24px;
  font-family: Arial, sans-serif;
  margin-top: 20px;
  display: flex;
  justify-content: center; 
}
</style>
