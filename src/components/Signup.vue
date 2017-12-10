<template>
  <div class="from-inline">
    <h3>Sign Up</h3>
    <div class="form-group">
      <input
        type="text"
        placeholder="email"
        class="form-control"
        v-model="main.email">
      <input
        type="password"
        placeholder="password"
        class="form-control"
        v-model="main.password"
      >
      <br>
      <button class="btn btn-primary" @click="signUp">Sign Up</button>
    </div>
    <br>
    <h1>{{main.error.message}}</h1>
    <br>
    <router-link to="/signin">Already a user ? Sign In</router-link>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
  import {firebaseApp} from "../firebaseApp";

  export default {
    name: 'Signup',
    computed: {
      ...mapState([
        'main'
      ]),
    },
    methods: {
      ...mapActions([
        'signUp'
      ]),
      // signUp() {
      //   firebaseApp.auth().createUserWithEmailAndPassword(this.main.email, this.main.password)
      //     .catch(error => {
      //       this.main.error = error;
      //     })
      // },
    },
  }
</script>

<style>

</style>
