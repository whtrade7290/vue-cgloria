import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "sweetalert2/dist/sweetalert2.min.css"; // SweetAlert2 CSS 파일 import
import materialKit from "./material-kit";

const app = createApp(App);
app.use(createPinia());

app.use(router);
app.use(materialKit);
app.mount("#app");
