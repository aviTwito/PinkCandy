import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ArticlePage from "@/components/ArticlePage";
import CreateRecipe from "@/components/Recipes/CreateRecipe";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create-recipe",
    name: "CreateRecipe",
    component: CreateRecipe,
    props: true
  },
  {
    path: "/article/:id",
    name: "ArticlePage",
    component: ArticlePage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "@/components/ArticlePage.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
