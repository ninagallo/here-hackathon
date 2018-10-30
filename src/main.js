import firebase from 'firebase';
import VueRouter from 'vue-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

const config = {
  apiKey: 'AIzaSyAwJpqImABM7fMntJMX7743hLHhot64dRc',
  authDomain: 'geolocalizacion-here.firebaseapp.com',
  databaseURL: 'https://geolocalizacion-here.firebaseio.com',
  projectId: 'geolocalizacion-here',
  storageBucket: 'geolocalizacion-here.appspot.com',
  messagingSenderId: '848624723309',
};
firebase.initializeApp(config);

window.firebase = firebase;