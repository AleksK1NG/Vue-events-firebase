<template>
  <div>
    <h3>Events Dashboard</h3>
    <button class="btn btn-danger btn-sm signOut-btn" @click="signOut">Sign Out</button>
    <hr>
    <app-add-event></app-add-event>
    <hr>
    <div class="col-md-12">
      <app-event-item
      v-for="(event, index) in events"
      :event="event"
      :key="index"
      ></app-event-item>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
  import {firebaseApp, eventsRefs} from "../firebaseApp";
  import AddEvent from './AddEvent.vue';
  import EventItem from './EventItem.vue';

  export default {
    name: 'Dashboard',
    computed: {
      ...mapState([
        'main',
        'events'
      ]),
    },
    methods: {
      ...mapActions([
        'signIn',
        'setEvents'
      ]),
      signOut() {
        this.$store.dispatch('signOut');
        firebaseApp.auth().signOut();
      }
    },
    components: {
      appAddEvent: AddEvent,
      appEventItem: EventItem
    },
    mounted(){
      eventsRefs.on('value', snap =>{   //Live time updating events
        let events = [];
        snap.forEach(event => {
          events.push(event.val());
        });
        console.log('events', events);
        this.$store.dispatch('setEvents', events);
      });
    }
  }
</script>

<style>
  .signOut-btn {
    position: absolute;
    text-align: right;
    top: 60px;
    right: 40px;
  }
</style>
