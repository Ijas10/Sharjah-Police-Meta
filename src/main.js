import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import store from "./store/index";
// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./assets/main.css";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.use(store);


app.mount("#app");
