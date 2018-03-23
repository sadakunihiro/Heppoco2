import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const ref = db.ref('items')

Vue.use(Vuex)


const store = () => new Vuex.Store({
    state: {
      items: [],
      user: null
    },
    mutations: {
      ...firebaseMutations
    },
    getters: {
      items: state => {
        return state.items
      },
    },
    actions: {
      INIT_ITEMS: firebaseAction(({bindFirebaseRef, state}) => {
        bindFirebaseRef('items', ref, {
          errorCallback: (error) => console.log('INIT_ITEMS: ', error.message)
        })
      }),
      INIT_AUTH: (context, arg) => {
        if (!firebase.auth().currentUser) {
          firebase.auth().signInWithEmailAndPassword(arg.user, arg.pass)
          .then(data => {
            console.log('user: ', data.email)
          })
          .catch(error => {
            console.log('signIn: ', error.message)
          })
        }
      },
      ADD_RECORD: firebaseAction((context, {key,item}) => {
        ref.push(item)
      }),
      MOD_RECORD: firebaseAction((context, {key,item}) => {
        ref.child(key).update(item)
      }),
      DEL_RECORD: firebaseAction((context, key) => {
        ref.child(key).remove()
      }),
    }
})

export default store;