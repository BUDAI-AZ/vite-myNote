import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../view/Layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../view/Home/index.vue'),
        meta: {
          isLogin: false
        },
      },
      {
        path: '/detail/:data',
        name: 'detail',
        component: () => import('../view/Detail/index.vue'),
        meta: {
          isLogin: false
        }
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('../view/Search/index.vue'),
        meta: {
          isLogin: false
        }
      },
      {
        path: '/food',
        name: 'food',
        component: () => import('../view/Food/index.vue'),
        meta: {
          isLogin: false
        }
      },
      {
        path: '/questions',
        name: 'questions',
        component: () => import('../view/Questions/index.vue'),
        meta: {
          isLogin: true
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../view/User/index.vue'),
        meta: {
          isLogin: false
        }
      },
      {
        path: '/page',
        name: 'page',
        component: () => import('../view/Page/index.vue'),
        meta: {
          isLogin: false
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/Login/index.vue')
  },
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next)=> {
  if(to.meta.isLogin) {
    if(localStorage.getItem('NOTE_USER')) {
      next()
    } else {
      router.push('/page')
    }
  } else {
    next()
  }
})

export default router