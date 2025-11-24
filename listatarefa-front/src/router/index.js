import { createRouter, createWebHistory } from "vue-router";

import AddTarefas from "./addTarefas.vue";
import listarTarefa from "./listarTarefa.vue";
import editarTarefa from "./editarTarefa.vue";


const routes = [
  { path: "/add", component: AddTarefas },
  {path: "/listar", component: listarTarefa},
{ path: "/editar/:id", component: editarTarefa }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
