import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
var firebase = require("firebase/app");
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDNZkOv8BmZu0qLnDs8KszicDlUDbb0rH0",
  authDomain: "pinkcandy-88b44.firebaseapp.com",
  databaseURL: "https://pinkcandy-88b44.firebaseio.com",
  projectId: "pinkcandy-88b44",
  storageBucket: "pinkcandy-88b44.appspot.com",
  messagingSenderId: "960571149800",
  appId: "1:960571149800:web:8415c58943fc03ffa4a85d",
  measurementId: "G-T4EEE2T0VC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
