
import Dashboard from './components/Dashboard.vue';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';

export default [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
   path: '/signin',
   component: Signin
  },
  {
    path: '/signup',
    component: Signup
  }
]
