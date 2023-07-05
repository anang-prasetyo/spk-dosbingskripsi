import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster'
// import PrettyCheckbox from 'pretty-checkbox-vue';


const app = createApp(App)

app
.use(router)
.use(Toaster)

app.mount('#app')
