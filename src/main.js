import {
    createApp
} from 'vue'
import App from './App.vue'
import router from '@/router'

const app = createApp(App)

// on a  acces au routeur comme this.$router
app.use(router)
app.mount('#app')