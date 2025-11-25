<script setup>
import { ref } from "vue";
import tarefaService from "@/services/tarefaService";
import { useRouter } from "vue-router";

const router = useRouter();

const tarefa = ref({
  nome: "",
  descricao: "",
  data: "",
  nivel: "baixa",
  status: "pendente"
});

async function add() {
  await tarefaService.addTarefa(tarefa.value);

  alert("Tarefa salva com sucesso!");

  setTimeout(() => {
    router.push("/");
  }, 1500); 
}
</script>

<template>
  <div style="padding:20px;">
    <h2>Adicionar Tarefa</h2>

    <form @submit.prevent="add">

      <input 
        v-model="tarefa.nome" 
        placeholder="Nome"
        required
      /><br />

      <textarea v-model="tarefa.descricao" placeholder="Descrição"></textarea><br />

      <input type="date" v-model="tarefa.data" /><br />

      <select v-model="tarefa.nivel">
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select><br />

      <select v-model="tarefa.status">
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluída">Concluída</option>
      </select><br />

      <button type="submit">Salvar</button>
    </form>
  </div>
</template>
