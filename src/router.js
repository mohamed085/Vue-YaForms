import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import Register from "./pages/Auth/Register";
import SelectAccount from "./components/Auth/SelectAccount";
import BusinessAccount from "./components/Auth/BusinessAccount";
import IndividualAccount from "./components/Auth/IndividualAccount";
import FormView from "./pages/Forms/FormView";
import CreateForm from "./pages/Forms/CreateForm";
import Forms from "./pages/Forms/Forms";
import ProfileIndex from "./pages/Profile/ProfileIndex";
import ProfileEdit from "./pages/Profile/ProfileEdit";
import Response from "./pages/Forms/Response";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/forget', component: ForgetPassword },
    { path: '/register', component: Register, children: [
            { path: '/register/', component: SelectAccount },
            { path: '/register/businessAccount', component: BusinessAccount },
            { path: '/register/individualAccount', component: IndividualAccount },
        ]},
    { path: '/profile/:id', component: ProfileIndex },
    { path: '/setting/:id', component: ProfileEdit },
    { path: '/forms', component: Forms },
    { path: '/createForm', component: CreateForm },
    { path: '/createContactForm', component: null },
    { path: '/createHiringForm', component: null },
    { path: '/createOrderForm', component: null },
    { path: '/responses', component: Response },
    { path: '/form/:id', component: FormView },
    { path: '/:notFound(.*)', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
