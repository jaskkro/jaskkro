import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import SpotifySearch from 'node-spotify-api';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

import config from './config';

Vue.config.productionTip = false;

export const spotify = new SpotifySearch({
  id: config.getClientId(),
  secret: config.getSecret()
});

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
