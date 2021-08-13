import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/ForgetPassword";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/forget', component: ForgetPassword },
    { path: '/register', component: null, children: [
            { path: '/register/', component: null },
            { path: '/register/individualAccount', component: null },
            { path: '/register/businessAccount', component: null }
        ]
    },
    { path: '/profile/:id', component: null },
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
