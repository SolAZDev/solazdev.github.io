import {createApp} from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faAt } from '@fortawesome/free-solid-svg-icons'
import {fab, faGithub, faItchIo, faLinkedin, faTwitter, faUnity } from '@fortawesome/free-brands-svg-icons'
import App from "../App.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab);
library.add(faGithub, faUnity, faTwitter, faLinkedin, faAt, faItchIo);
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('fa', FontAwesomeIcon)
