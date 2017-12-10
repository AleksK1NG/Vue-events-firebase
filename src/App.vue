<template>
  <div id="app">
    <h1>Vue events project</h1>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
  import Dashboard from './components/Dashboard.vue';
  import Signin from './components/Signin.vue';
  import Signup from './components/Signup.vue';

export default {
  name: 'app',
  computed: {
    ...mapState([
      'main'
    ]),
  },
  components: {
    appDashboard: Dashboard,
    appSignin: Signin,
    appSignup: Signup
  },
}
</script>

<style>
#app {
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: 10%;
  padding-right: 10%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
