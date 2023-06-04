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

  console.log(cards)
  </script> 

  <template>
  <article class="profile" v-for="something in  cards" :key="something.id" :id="something.image" :name="something.name" :instagram="something.instagram" :about="something.about" >
    <div class="profile-image"> 
      <img v-bind:src="id" alt="Person" />
    </div>
    <h2 class="profile-username">{{name}}</h2>
    <small class="profile-user-handle">{{instagram}}</small>
    <p>{{ about }}</p>    
  </article>
  </template> 
  


  
  <style lang="scss" scoped  >
   @import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

*,
*:before,
*:after {
	box-sizing: border-box;
}

/* Some basic CSS overrides */
body {
	line-height: 1.5;
	min-height: 100vh;
	font-family: "Be Vietnam Pro", sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #060606;
}

button,
input,
select,
textarea {
	font: inherit;
}

a {
	color: inherit;
}
/* End basic CSS override */

.profile {
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 3rem;
	width: 90%;
	max-width: 300px;
	background-color: #1b2028;
	border-radius: 16px;
	position: relative;
	border: 3px solid transparent;
	background-clip: padding-box;
	text-align: center;
	color: #f1f3f3;
	background-image: linear-gradient(
		135deg,
		rgba(#752e7c, 0.35),
		rgba(#734a58, 0.1) 15%,
		#1b2028 20%,
		#1b2028 100%
	);
	&:after {
		content: "";
		display: block;
		top: -3px;
		left: -3px;
		bottom: -3px;
		right: -3px;
		z-index: -1;
		position: absolute;
		border-radius: 16px;
		background-image: linear-gradient(
			135deg,
			#752e7c,
			#734a58 20%,
			#1b2028 30%,
			#2c333e 100%
		);
	}
}

.profile-image {
	border-radius: 50%;
	overflow: hidden;
	width: 175px;
	height: 175px;
	position: relative;
	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
	}
}

.profile-username {
	font-size: 1.5rem;
	font-weight: 600;
	margin-top: 1.5rem;
}

.profile-user-handle {
	color: #7d8396;
}

</style>