<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../lib/supabaseClient'

  const cards = ref([])

  async function getProfile() {
    const { data } = await supabase.from('cards').select()
    cards.value = data
  }

  onMounted(() => {
    getProfile()
  })
  </script>

  <template>
    <ul>
      <li v-for="card in cards" :key="card.id">{{ card.username }}</li>
    </ul>
  </template>