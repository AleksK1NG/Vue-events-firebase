import Vue from 'vue';
import Vuex from 'vuex';
import {firebaseApp} from "../firebaseApp";
import {eventsRefs} from '../firebaseApp';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    main: {
      email: '',
      password: '',
      error: {
        message: ''
      },
      showForm: false
    },
    user: {

    },
    event: {
      title: '',
      description: '',
      date: '',
      location: '',
      email: ''
    },
    events: []
  },
  getters: {

  },
  mutations: {
    SIGN_IN: (state, payload) => {   //Sign in logic
      state.user = payload;
    },
    SIGN_OUT: (state) => {  //Sign out logic
      state.user = {};
    },
    SIGN_UP:(state) => {
      firebaseApp.auth().createUserWithEmailAndPassword(state.main.email, state.main.password)
        .catch(error => {
          state.main.error = error;
        })
    },
    ADD_EVENT: (state) => {
      state.event.email = state.user.email;
      eventsRefs.push(state.event);
    },
    SET_EVENTS: (state, payload) => {
      state.events = payload;
    },
    //Firebase auth
    // SIGN_IN: (state) => {
    //   firebaseApp.auth().signInWithEmailAndPassword(state.main.email, state.main.password)
    //     .catch(error => {
    //       state.main.error = error;
    //     })
    // },
  },
  actions: {                             //Different ways of logic
    signIn: ({commit}, payload) => {
      commit('SIGN_IN', payload);
    },
    signOut: ({commit}) => {
      commit('SIGN_OUT');
    },
    signUp: ({commit}) => {
      commit('SIGN_UP');
    },
    addEvent: ({commit}) => {
      commit('ADD_EVENT');
    },
    setEvents: ({commit}, payload) => {
      commit('SET_EVENTS', payload);
    }
  }
});
