
const routes = [
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/',
    meta: {
      requireAuth: true
    },
    name: 'home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/Dashboard')
      },
      {
        path: '/men-products',
        component: () => import('pages/MenProducts')
      },
      {
        path: '/women-products',
        component: () => import('pages/WomenProducts')
      },
      {
        path: '/bags-n-purses',
        component: () => import('pages/BagsNPurses')
      }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
