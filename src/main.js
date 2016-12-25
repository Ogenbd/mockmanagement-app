import style from './style.scss';
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

import Home from './App/home';
import About from './App/about';
import MainNav from './App/main-nav';
import Email from './App/email';
import Events from './App/events';
import Places from './App/places';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/about',
  component: About
}, {
  path: '/email',
  component: Email
}, {
  path: '/events',
  component: Events
}, {
  path: '/places',
  component: Places
}, {
  path: '*', 
  redirect: '/home'
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.http.options.root = 'http://localhost:3003';

const app = new Vue({
  router,
  components: {
    'main-nav': MainNav,

  }
}).$mount('#app' )