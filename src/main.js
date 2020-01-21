import Vue from "vue";
import App from "./App.vue";
import style from "./style/style.scss";
Vue.use(style);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
