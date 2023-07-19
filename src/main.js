import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faTwitter, faYoutube, faInstagram, faSquareFacebook, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitter, faYoutube, faInstagram,faSquareFacebook,faSquareInstagram)

const app =  createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)
app.mount('#app')
