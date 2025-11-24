<script setup>
import { ref, onMounted } from "vue";
import tarefaService from "@/services/tarefaService";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const tarefa = ref({});

async function carregar() {
  const { data } = await tarefaService.getTarefas(route.params.id);
  tarefa.value = data;
}

async function salvar() {
  await tarefaService.atualizarTarefa(route.params.id, tarefa.value);
  router.push("/");
}

onMounted(carregar);
</script>

<template>
  <div style="padding:20px;">
    <h2>Editar Tarefa </h2>

    <form @submit.prevent="salvar">
      <input v-model="tarefa.nome" /><br />
      <textarea v-model="tarefa.descricao"></textarea><br />
      <input type="date" v-model="tarefa.date" /><br />

      <select v-model="tarefa.nivel">
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select><br />

      <select v-model="tarefa.status">
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluida">Concluída</option>
      </select><br />

      <button type="submit">Salvar alterações</button>
    </form>
  </div>
</template>


