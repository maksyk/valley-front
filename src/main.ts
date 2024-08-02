import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import {createPinia} from "pinia";
import Router from "./router";
import NumberAnimation from "vue-number-animation";
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(NumberAnimation)
pinia.use(piniaPluginPersistedstate);
app.component('vue-countdown', VueCountdown);

app.use(Router);

app.mount('#app')
