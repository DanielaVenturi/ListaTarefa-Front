import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default {

  addTarefa(tarefa) {
    return api.post("/tarefas", tarefa);
  },

  getTarefas() {
    return api.get("/tarefas");
  },

  getTarefa(id) {
    return api.get(`/tarefas/${id}`);
  },

  atualizarTarefa(id, tarefa) {
    return api.put(`/tarefas/${id}`, tarefa);
  },

  deletarTarefa(id) {
    return api.delete(`/tarefas/${id}`);
  }
};
