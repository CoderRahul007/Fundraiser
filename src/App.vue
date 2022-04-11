<template>
  <v-app>
     <Header/>
    <v-content class="purple lighten-5">
   <router-view></router-view>
     </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
