import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/servicio',
    name: 'servicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ServiciosView.vue')
  },


  
// Aqui estan los nav link que agregue , por si quieres busacar y borrar rapido 

  {
    path: '/servicio/servicio1',
    name: 'servicio1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicio1View.vue')
  },
    {
      path: '/servicio/servicio2',
      name: 'servicio2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Servicio2View.vue')
    },
      {
        path: '/servicio/servicio3',
        name: 'servicio3',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Servicio3View.vue')
      },
        {
          path: '/servicio/servicio4',
          name: 'servicio4',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/Servicio4View.vue')
        },
          {
            path: '/servicio/servicio1',
            name: 'servicio5',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/Servicio5View.vue')
          },
            {
              path: '/servicio/servicio6',
              name: 'servicio6',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ '../views/Servicio6View.vue')
            },
              {
                path: '/servicio/servicio7',
                name: 'servicio7',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/Servicio7View.vue')
              },
                {
                  path: '/servicio/servicio8',
                  name: 'servicio8',
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                  component: () => import(/* webpackChunkName: "about" */ '../views/Servicio8View.vue')
                },
                  {
                    path: '/servicio/servicio8',
                    name: 'servicio8',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ '../views/Servicio8View.vue')
                  },
                    {
                      path: '/servicio/servicio9',
                      name: 'servicio9',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ '../views/Servicio9View.vue')
                    },
                      {
                        path: '/servicio/servicio10',
                        name: 'servicio10',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import(/* webpackChunkName: "about" */ '../views/Servicio10View.vue')
                      },
                        {
                          path: '/servicio/servicio11',
                          name: 'servicio11',
                          // route level code-splitting
                          // this generates a separate chunk (about.[hash].js) for this route
                          // which is lazy-loaded when the route is visited.
                          component: () => import(/* webpackChunkName: "about" */ '../views/Servicio11View.vue')
                        },
 // Aqui termina cuidado 


  {
    path: '/cursos',
    name: 'cursos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CursoView.vue')
  },
  {
  path: '/cursos/curso1',
  name: 'curso1',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/Curso1View.vue')
  },
  {
    path: '/cursos/curso2',
    name: 'curso2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Curso2View.vue')
    },
    {
      path: '/cursos/curso3',
      name: 'curso3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Curso3View.vue')
      },
      {
        path: '/cursos/curso4',
        name: 'curso4',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Curso4View.vue')
        },
        {
          path: '/cursos/curso5',
          name: 'curso5',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/Curso5View.vue')
          },
          {
            path: '/cursos/curso6',
            name: 'curso6',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/Curso6View.vue')
            },
            {
              path: '/cursos/curso7',
              name: 'curso7',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ '../views/Curso7View.vue')
              },
              {
                path: '/cursos/curso8',
                name: 'curso8',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/Curso8View.vue')
                },
                {
                  path: '/cursos/curso9',
                  name: 'curso9',
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                  component: () => import(/* webpackChunkName: "about" */ '../views/Curso9View.vue')
                  },

  {
    path: '/equipo',
    name: 'equipo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EquipoView.vue')
  },

  {
    path: '/menu',
    name: 'menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
