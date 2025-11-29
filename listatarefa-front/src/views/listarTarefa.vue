<script setup>
import { ref, computed, onMounted } from "vue";
import tarefaService from "@/services/tarefaService";
import { useRouter } from "vue-router";

const router = useRouter();
const tarefas = ref([]);

const filtroStatus = ref("");
const filtroNivel = ref("");

function corNivel(nivel) {
  if (nivel === "alta") return "#ffb3b3";
  if (nivel === "media") return "#fff2b3";
  return "#b3ffb3";
}

const tarefasFiltradas = computed(() => {
  return tarefas.value.filter((tarefa) => {
    const passaStatus =
      filtroStatus.value === "" || tarefa.status === filtroStatus.value;

    const passaNivel =
      filtroNivel.value === "" || tarefa.nivel === filtroNivel.value;

    return passaStatus && passaNivel;
  });
});

async function carregar() {
  const { data } = await tarefaService.getTarefas();
  tarefas.value = data;
}

async function concluir(tarefa) {
  tarefa.status = "concluida";
  await tarefaService.atualizarTarefa(tarefa.id, tarefa);
  carregar();
}

function editar(id) {
  router.push(`/editar/${id}`);
}

async function deletar(id) {
  const confirmar = confirm("Tem certeza que deseja deletar esta tarefa?");

  if (!confirmar) return;

  await tarefaService.deletarTarefa(id);
  alert("Tarefa deletada com sucesso!");
  carregar();
}

onMounted(carregar);
</script>

<template>
  <div class="lista-container">
    <h2 class="titulo">Lista de Tarefas</h2>

    <div class="filtros">
      <select v-model="filtroStatus">
        <option value="">Todos os status</option>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluida">Concluída</option>
      </select>

      <select v-model="filtroNivel">
        <option value="">Todos os níveis</option>
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select>
    </div>

    <p v-if="tarefasFiltradas.length === 0" class="sem-tarefas">
      Você não tem tarefas.
    </p>

    <div
      v-for="t in tarefasFiltradas"
      :key="t.id"
      class="card"
      :style="{ background: corNivel(t.nivel) }"
    >
      <h3>{{ t.nome }}</h3>
      <p>{{ t.descricao }}</p>
      <p><strong>Data:</strong> {{ t.data }}</p>
      <p><strong>Status:</strong> {{ t.status }}</p>

      <div class="botoes">
        <button class="btn concluir" @click="concluir(t)">Concluir</button>
        <button class="btn editar" @click="editar(t.id)">Editar</button>
        <button class="btn deletar" @click="deletar(t.id)">Deletar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lista-container {
  padding: 20px;
  max-width: 900px;
  margin: auto;
}

.titulo {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}

.filtros {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filtros select {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #f9f9f9;
}

.sem-tarefas {
  text-align: center;
  color: #666;
  margin-top: 20px;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 0 5px #ccc4;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 10px #ccc6;
}

.card h3 {
  margin: 0 0 10px;
}

.botoes {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.btn {
  padding: 8px 12px;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 0.9rem;
}

.concluir {
  background: #a8e6a1;
}

.concluir:hover {
  background: #92d88a;
}

.editar {
  background: #b3d1ff;
}

.editar:hover {
  background: #96bfff;
}

.deletar {
  background: #ffb3b3;
}

.deletar:hover {
  background: #ff9d9d;
}

@media (max-width: 600px) {
  .botoes {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .filtros {
    flex-direction: column;
  }

  .filtros select {
    width: 100%;
  }
}
</style>
