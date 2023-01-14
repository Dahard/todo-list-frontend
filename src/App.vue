<template>
	<NavBar :user="user"/>
  <v-app>
    <v-main>
      <router-view :user="user"/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import axios from 'axios';

export default {
    name: "App",
    data: () => ({
      user: null
    }),
    components: { 
      NavBar 
    },

    async created() {
        const response = await axios.get('/api/User/GetUserDetails');
        
        this.user = response.data;
    
    },
}
</script>
