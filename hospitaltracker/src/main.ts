import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./plugins/bootstrap-vue";
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import i18n from '@/plugins/i18n';


Object.keys(rules)
.forEach(rule=>{
    extend(rule,rules[rule])
})

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


