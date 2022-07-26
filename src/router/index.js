import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Success from "../views/restaurateurs/Success.vue";
import Edit from "../views/restaurateurs/Edit.vue";
import Delete from "../views/restaurateurs/Delete.vue";
import EditSuccess from "../views/restaurateurs/EditSuccess.vue";
import Create from "../views/restaurateurs/Create.vue";
import Dashboard from "../views/restaurateurs/Dashboard.vue";
import Profil from "../views/restaurateurs/Profil.vue";
import Connexion from "../views/restaurateurs/Connexion.vue";
import CreateResto from "../views/restaurants/CreateResto.vue";
import CreateMenu from "../views/menu/CreateMenu.vue";
import MenuSuccess from "../views/menu/MenuSuccess.vue";
import MenuDelete from "../views/menu/MenuDelete.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  // Restaurateurs
  {
    path: "/restaurateurs/success",
    name: "success",
    component: Success,
  },

  {
    path: "/restaurateurs/delete",
    name: "delete",
    component: Delete,
  },
  {
    path: "/restaurateurs/edit",
    name: "edit",
    component: Edit,
  },

  {
    path: "/restaurateurs/editsuccess",
    name: "editsuccess",
    component: EditSuccess,
  },
  {
    path: "/restaurateurs/create",
    name: "create",
    component: Create,
  },
  {
    path: "/restaurateurs/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/restaurateurs/profil",
    name: "profil",
    component: Profil,
  },
  {
    path: "/restaurateurs/connexion",
    name: "connexion",
    component: Connexion,
  },

  // Restaurants

  {
    path: "/restaurants/create",
    name: "createResto",
    component: CreateResto,
  },

  {
    path: "/restaurants/success",
    name: "createSuccess",
    component: Success,
  },

  // Menu

  {
    path: "/menu/create",
    name: "createMenu",
    component: CreateMenu,
  },

  {
    path: "/menu/menusuccess",
    name: "menuSuccess",
    component: MenuSuccess,
  },

  {
    path: "/menu/menudelete",
    name: "menuDelete",
    component: MenuDelete,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
