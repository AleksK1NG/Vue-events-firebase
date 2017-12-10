<template>
  <div class="from-inline">
    <h3>Sign in</h3>
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
      <button class="btn btn-primary" @click="signIn">Sign IN</button>
    </div>
    <br>
    <h1>{{main.error.message}}</h1>
    <br>
    <router-link to="/signup">You are not a user ? You can Sign Up</router-link>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';

  export default {
    name: 'Signin',
    computed: {
      ...mapState([
        'main'
      ]),
    },
    methods: {
      ...mapActions([
        'signIn'
      ])
    },
  }
</script>

<style>

</style>
