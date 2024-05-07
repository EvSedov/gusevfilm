import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BaseView from "../views/BaseView.vue";
import RequestsView from "../views/RequestsView.vue";
import NotesView from "../views/NotesView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomeView },
  { path: '/base', component: BaseView },
  { path: '/requests', component: RequestsView },
  { path: '/notes', component: NotesView },
  { path: '/categories', component: CategoriesView },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
];

export default routes;
