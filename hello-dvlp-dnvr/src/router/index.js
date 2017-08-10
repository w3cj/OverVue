import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import HelloDvlpDnvr from '@/components/HelloDvlpDenver';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/dvlp',
      name: 'HelloDvlpDnvr',
      component: HelloDvlpDnvr,
    },
  ],
});
