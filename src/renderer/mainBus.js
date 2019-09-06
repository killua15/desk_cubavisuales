import Vue from 'vue'
import App from './App'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

Vue.use(VueGlide)
new Vue({
     el: '#app',
     render : h=> h(App)
})

export const eventBus = new Vue()