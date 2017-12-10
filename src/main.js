import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes'
import { firebaseApp } from './firebaseApp'


Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Login to firebase auth
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/dashboard')
  } else {
    router.replace('/signin')
  }
});


new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router: router
});
