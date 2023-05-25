<script setup>
import { onMounted, ref } from 'vue'
import StartPage from './views/AboutView.vue'
import BeforePage from './views/HomeView.vue'

import { supabase } from '../src/lib/supabaseClient'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <StartPage :userId="userId" v-if="session" :session="session" />
    <BeforePage v-else />
  </div>
</template> 
