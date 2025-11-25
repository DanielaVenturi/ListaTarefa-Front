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
  return tarefas.value.filter(tarefa => {
    
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
  await tarefaService.deletarTarefa(id);
  carregar();
}

</script>

<template>
  <div style="padding:20px;">
    <h2>Lista de Tarefas</h2>

    <div style="margin-bottom:10px;">
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

    <div v-for="t in tarefasFiltradas" :key="t.id"
         :style="{
           border: '1px solid #ccc',
           padding: '10px',
           margin: '10px 0',
           background: corNivel(t.nivel)
         }">

      <h3>{{ t.nome }}</h3>
      <p>{{ t.descricao }}</p>
      <p>Data: {{ t.data }}</p>
      <p>Status: {{ t.status }}</p>

      <button @click="concluir(t)">Marcar como concluída</button>
      <button @click="editar(t.id)">Editar</button>
      <button @click="deletar(t.id)" >Deletar</button>
    </div>
  </div>
</template>

