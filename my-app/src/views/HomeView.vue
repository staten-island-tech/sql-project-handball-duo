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
  <RouterView/>
<h1>hio</h1>
<RouterLink to="/login">Login</RouterLink>
<RouterLink to="/Register">Register</RouterLink>
</template>

<style scoped>

</style>
