import { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue3 } from "bootstrap-vue-3";
import store from "./store";
import router from "./router";

// Import Bootstrap and Bootstrap-Vue CSS files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App).use(store).use(BootstrapVue3).use(router).mount("#app");
