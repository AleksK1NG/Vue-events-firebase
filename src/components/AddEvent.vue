<template>
  <div>
    <h4>Add an Event</h4>
    <input type="checkbox" v-model="main.showForm">
    <div class="form" v-if="main.showForm">
      <div class="form-group">
        <label>Title</label>
        <input type="text" placeholder="Title" v-model="event.title" class="form-control">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" placeholder="Description" v-model="event.description" class="form-control">
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" v-model="event.date" class="form-control">
      </div>
      <div class="form-group">
        <label>Location</label>
        <input type="text" placeholder="Location" v-model="event.location" class="form-control">
      </div>
      <button class="btn-sm btn-primary" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
  import {eventsRefs} from '../firebaseApp';

  export default {
    name: 'AddEvent',
    computed: {
      ...mapState([
        'event',
        'main'
      ]),
    },
    methods: {
      // addEvent() {
      //   this.$store.state.event.email = this.$store.state.user.email;
      //   eventsRefs.push(this.event);
      // },
      ...mapActions([
        'addEvent'
      ])
    },
  }
</script>

<style>

</style>
