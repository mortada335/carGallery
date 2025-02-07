import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "./plugins/axios";
import axiosInstance from "./axiosInstance";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const app = createApp(App);
const instance = axios.create();

app.use(createPinia());
app.config.globalProperties.$axios = axiosInstance;
app.use(router);
app.mount("#app");

export default instance;
