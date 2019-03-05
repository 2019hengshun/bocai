import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: resolve => require(['@/components/index'], resolve),
      children: [{
          path: '/',
          redirect: 'home'
        },
        {
          path: 'home',
          component: resolve => require(['@/components/page/homepage'], resolve),
        },
        {
          path: 'game',
          component: resolve => require(['@/components/page/baodian'], resolve),
        },
        {
          path: 'games',
          component: resolve => require(['@/components/page/instation'], resolve),
        },        
      ]
    },
    {
      path: '/i',
      component: resolve => require(['@/components/HelloWorld'], resolve),
    }
  ]
})
