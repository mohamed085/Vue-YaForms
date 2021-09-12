import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import Register from "./pages/Auth/Register";
import FormView from "./pages/Forms/FormView";
import CreateForm from "./pages/Forms/CreateForm";
import Forms from "./pages/Forms/Forms";
import ProfileIndex from "./pages/Profile/ProfileIndex";
import ProfileEdit from "./pages/Profile/ProfileEdit";
import Response from "./pages/Forms/Response";
import Summary from "./components/Form/Response/Summary";
import Question from "./components/Form/Response/Question";
import Individual from "./components/Form/Response/Individual";
import CreateTemplates from "@/pages/Forms/CreateTemplates";
import FormEdit from "@/pages/Forms/FormEdit";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/forget', component: ForgetPassword },
    { path: '/register', component: Register },
    { path: '/profile/:id', component: ProfileIndex },
    { path: '/setting/:id', component: ProfileEdit },
    { path: '/forms', component: Forms },
    { path: '/create-form', component: CreateForm },
    { path: '/form-edit/:id', component: FormEdit },
    { path: '/create-template', component: CreateTemplates },
    { path: '/create-contact-form', component: null },
    { path: '/create-hiring-form', component: null },
    { path: '/create-order-form', component: null },
    { path: '/form/response/:id', component: Response, children: [
            { path: '/form/response/:id/', component: Summary },
            { path: '/form/response/:id/question', component: Question },
            { path: '/form/response/:id/individual', component: Individual },
        ]},
    { path: '/form/:id', component: FormView },
    { path: '/:notFound(.*)', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
