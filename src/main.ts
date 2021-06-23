import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/fontawesome'
import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'
import "./plugins/fontawesome";
import "./plugins/prime";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import 'primevue/resources/themes/arya-blue/theme.css'
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import 'primeflex/primeflex.css';

// import 'assets/fixes.scss'

import './assets/theme.scss'

createApp(App)
    .use(router)
    // .use(createMetaManager())
    .component("fa", FontAwesomeIcon)
    .mount('#app')

