<template>
  <v-app>
    <v-content>
      <HomeWrapper/>
    </v-content>
  </v-app>
</template>

<script>
import HomeWrapper from './components/HomeWrapper.vue';

export default {
  name: 'App',

  components: {
    HomeWrapper,
  },

  data: () => ({
    //
  }),
};
</script>
