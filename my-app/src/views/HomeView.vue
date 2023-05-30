<script>
export default {
  name: 'BeforePage'
}
</script>
<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<h1>Start Up Page</h1>
  <RouterView/>
<div class="register">
<RouterLink to="/login" class="button">Login</RouterLink>
</div>
<div class="login">
<RouterLink to="/Register" class="button">Register</RouterLink>
</div>
</template>

<style scoped>
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
