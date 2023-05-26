<script>
export default {
  name: 'BeforePage'
}
</script>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
</script>

<template>
<h1>Start Up Page</h1>
  <RouterView/>

<RouterLink to="/login">Login</RouterLink>
<RouterLink to="/Register">Register</RouterLink>
</template>

<style scoped>

</style>
