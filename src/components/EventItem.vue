<template>
  <div class="col-md-4">
      <div class="event-card">
        <h4 class="card-title">{{event.title}}</h4>
        <p class="card-text">{{event.description}}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group">Date: {{event.date}}</li>
          <li class="list-group">Location: {{event.location}}</li>
          <li class="list-group">Host: {{event.email}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';

  export default {
    props: ['event'],
    name: 'EventItem',
    computed: {
      ...mapState([
        // 'main',
        // 'event',
        // 'events'
      ]),
    },
  }
</script>

<style>
  .event-card {
    margin-top: 11px;
    border: 1px solid black;
    border-radius: 11px;
  }
</style>
