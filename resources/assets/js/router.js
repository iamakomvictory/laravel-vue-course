import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage.vue'
import newRoute from './components/pages/newRoute.vue'

const routes = [
    {

    path: '/my-new-vue-route',
    component: firstPage
   
    },

    {
        
            path: '/new-route',
            component: newRoute
           
            }
]
export default new Router({
model: 'history',   
routes 
})