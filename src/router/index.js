import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    meta: {
      title: "登陆",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/scan",
    name: "Scan",
    meta: {
      title: "扫码",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scan.vue"),
  },
  {
    path: "/scanResult",
    name: "ScanResult",
    meta: {
      title: "扫码结果",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ScanResult.vue"),
  },
  {
    path: "/checkList",
    name: "CheckList",
    meta: {
      title: "资产盘点",
    },
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
        meta: {
          title: "首页",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home.vue"),
      },
      {
        path: "me",
        name: "Me",
        meta: {
          title: "我的",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Me.vue"),
      },
      {
        path: "check",
        name: "Check",
        meta: {
          title: "盘点",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Check.vue"),
      },
      {
        path: "audit",
        name: "Audit",
        meta: {
          title: "审批",
        },
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

router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta && to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title;
  } else {
    document.title = "资产系统";
  }

  next(); //执行进入路由，如果不写就不会进入目标页
});

export default router;
