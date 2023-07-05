import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // console.log('SavedPosition', savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, left: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('../views/viewRumah/HomeView.vue'),
        rvRight: () => import('../layouts/MenuRight.vue')
      }
    },
    {
      path: '/pantau',
      name: 'pantau',
      components: {
        default: () => import('../views/viewPantau/PantauView.vue'),
        rvRight: () => import('../layouts/MenuRight.vue')
      }
    },
    {
      path: '/kriteria',
      name: 'kriteria',
      components: {
        default: () => import('../views/viewKriteria/KriteriaView.vue'),
        rvRight: () => import('../layouts/MenuRight.vue')
      }
    },
    {
      path: '/alternatif',
      name: 'alternatif',
      components: {
        default: () => import('../views/viewAlternatif/AlternatifView.vue'),
        rvRight: () => import('../layouts/MenuRight.vue')
      }
    },
    {
      path: '/saw',
      name: 'saw',
      components: {
        default: () => import('../views/viewSaw/SawView2.vue'),
        rvRight: () => import('../layouts/MenuRight.vue')
      }
    },
    {
      path: '/panduan',
      name: 'panduan',
      components: {
        default: () => import('../views/PanduanView.vue'),
        rvRight: () => import('../layouts/MenuRight.vue')
      }
    },
    {
      path: '/pesan',
      name: 'pesan',
      components: {
        default: () => import('../views/viewPesan/PesanView2.vue'),
        rvRight: () => import('../layouts/MenuRight.vue')
      }
    },
    // {
    //   path: '/coba',
    //   name: 'coba',
    //   component: () => import('../views/CobaView.vue')
    // },
    {
      path: '/profil',
      name: 'profil',
      components: {
        default: () => import('../views/viewSaya/ProfilView.vue'),
        rvRight: () => import('../layouts/MenuRight.vue')
      }
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
