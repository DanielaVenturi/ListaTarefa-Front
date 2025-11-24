import { createRouter, createWebHistory } from "vue-router";

import AddTarefas from "./addTarefas.vue";
import listarTarefa from "./listarTarefa.vue";


const routes = [
  { path: "/add", component: AddTarefas },
  {path: "/listar", component: listarTarefa}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
