import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: null },
    { path: '/login', component: null },
    { path: '/forgetPassword', component: null },
    { path: '/register', component: null, children: [
            { path: '/register/', component: null },
            { path: '/register/individualAccount', component: null },
            { path: '/register/businessAccount', component: null }
        ]
    },
    { path: '/:id', component: null },
    { path: '/setting/:id', component: null },
    { path: '/forms', component: null },
    { path: '/createForm', component: null },
    { path: '/:notFound(.*)', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
