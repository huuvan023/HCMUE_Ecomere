
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
      },
      {
        path: '/product',
        component: () => import('pages/Product')
      },
      {
        path: '/cart',
        component: () => import('pages/Cart')
      },
      {
        path: '/favourite-item',
        component: () => import('pages/Favourite')
      },
      {
        path: '/user',
        component: () => import('../layouts/UserLayout'),
        children: [
          {
            path: '',
            component: () => import('../pages/User/AccountOverview')
          },
          {
            path: '/user/my-orders',
            component: () => import('../pages/User/MyOrders')
          },
          {
            path: '/user/my-details',
            component: () => import('../pages/User/MyDetails')
          },
          {
            path: '/user/address-book',
            component: () => import('../pages/User/AddressBook')
          },
          {
            path: '/user/gift-and-vouchers',
            component: () => import('../pages/User/GiftNVouchers')
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
