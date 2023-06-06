<script setup>
  import { onMounted } from 'vue'
import { useProductsStore}  from '../lib/ProductStore'

const useProducts = useProductsStore()


onMounted(() => {  
	useProducts.getProfile()
  })


  </script> 

  <template>
  <article class="profile" v-for="something in  useProducts.cards" :key="something.id" :image="something.image" :name="something.name" :instagram="something.instagram" :about="something.about" >
    <div class="profile-image"> 
      <img v-bind:src="something.image" alt="Person" />
    </div>
    <h2 class="profile-username">{{something.name}}</h2>
    <small class="profile-user-handle">@{{something.instagram}}</small>
    <p>{{ something.about }}</p>    
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px black;
}

.profile-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.profile-username {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.profile-user-handle {
  font-size: 14px;
  color: #393030;
  margin-bottom: 10px;
}

.profile p {
  font-size: 16px;
  text-align: center;
}

</style>