
require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('weather-component', require('./components/WeatherComponent.vue').default);

const app = new Vue({
  el: '#app',
});
