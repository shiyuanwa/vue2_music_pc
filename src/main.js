/* vue */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
/* css */
import 'tailwindcss/tailwind.css';
/* element-ui */
// import { Input, button } from 'element-ui';
// const ElEMENT_UI = [Input, button];
// ElEMENT_UI.map(cpt => Vue.component(cpt.name, cpt));

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
