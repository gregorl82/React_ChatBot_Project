import Vue from 'vue'
import App from './App.vue'

// export var mymap = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

var mymap = L.map('mapid').setView([55.8642,  -4.2518], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1IjoiYW5kYjIyIiwiYSI6ImNrNG83NTgzejFiZWszbWw1Y2FqcDloMmcifQ.93qMo6mXOTZK00is3R3h7w'
}).addTo(mymap);
