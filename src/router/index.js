import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/scan",
    name: "Scan",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scan.vue"),
  },
  {
    path: "/scanResult",
    name: "ScanResult",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ScanResult.vue"),
  },
  {
    path: "/checkList",
    name: "CheckList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CheckList.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Main.vue"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home.vue"),
      },
      {
        path: "me",
        name: "Me",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Me.vue"),
      },
      {
        path: "check",
        name: "Check",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Check.vue"),
      },
      {
        path: "audit",
        name: "Audit",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Audit.vue"),
      },
    ],
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
