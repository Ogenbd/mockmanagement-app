import style from './style.scss';
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

import Home from './App/home';
import About from './App/about';
import MainNav from './App/main-nav';
import Email from './App/email';

import Events from './App/events';
import EventEdit from './App/events/components/event-edit-create';
import EventDetails from './App/events/components/event-details';

import Places from './App/places';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3003';

const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/about',
  component: About
}, {
  path: '/email',
  component: Email
}, 
{
  path: '/events',
  component: Events
},
{
  path: '/events/:id',
  component: EventDetails
},
{
  path: '/events/:id/edit',
  component: EventEdit
},
{
  path: '/places',
  component: Places
}, {
  path: '*', 
  redirect: '/home'
}
]
// {
//   path: '/events', component: Events, children: [
//         //{path: '', component: Events},
//         {path: ':id', component: EventDetails},    
//         //{path: 'edit', component: EventEdit},
//         //{path: ':id/edit', component: EventEdit},
//     ]},
//  {

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