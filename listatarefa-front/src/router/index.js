import { createRouter, createWebHistory } from "vue-router";

import AddTarefas from "@/views/AddTarefas.vue";
import listarTarefa from "@/views/listarTarefa.vue";
import editarTarefa from "@/views/editarTarefa.vue";
import Home from "@/views/Home.vue";


const routes = [
  { path: "/add", component: AddTarefas },
  {path: "/listar", component: listarTarefa},
  { path: "/editar/:id", component: editarTarefa },
  {path: "/", component: Home}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
