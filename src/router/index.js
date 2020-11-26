import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../layout/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/index/index")
      },
      {
        path: "memorial",
        name: "Memorial",
        component: () => import("@/views/memorial/memorial")
      },
      {
        path: "life",
        name: "Life",
        component: () => import("@/views/life/life")
      },
      {
        path: "add",
        name: "Add",
        component: () => import("@/views/add/add")
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/register/register.vue")
      },
      {
        path: "help",
        name: "Help",
        component: () => import("@/layout/help"),
        children: [
          {
            path: "/",
            name: "HelpIndex",
            component: () => import("@/views/help/help-center")
          },
          {
            path: "content/:content",
            name: "HelpContent",
            component: () => import("@/views/help/help-content")
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/people",
    name: "People",
    component: () => import("@/views/people/people"),
    children:[
      {
        path:"/",
        name:"PeopleIntro",
        component: () => import("@/views/people/people-intro")
      },{
        path:"video",
        name:"PeopleVideo",
        component: () => import("@/views/people/people-video")
      },{
        path:"picture",
        name:"PeoplePicture",
        component: () => import("@/views/people/people-picture")
      },{
        path:"jidian",
        name:"PeopleJidian",
        component: () => import("@/views/people/people-jidian")
      },{
        path:"article",
        name:"PeopleArticle",
        component: () => import("@/views/people/people-article")
      },{path:"detail",
        name:"PeopleArticleDe",
        component:()=>import("@/views/people/people-article-de")
      }
    ]
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
