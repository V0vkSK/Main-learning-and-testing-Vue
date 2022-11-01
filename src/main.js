import { createApp } from "vue";
import App from "./App.vue";
import store from "./vuex/store";
// import Meta from "vue-meta";

import router from "./routes";

createApp(App).use(router).use(store).mount("#app");
