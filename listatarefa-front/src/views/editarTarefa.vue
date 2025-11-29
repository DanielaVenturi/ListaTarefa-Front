<script setup>
import { ref, onMounted } from "vue";
import tarefaService from "@/services/tarefaService";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const tarefa = ref({});

async function carregar() {
  const { data } = await tarefaService.getTarefa(route.params.id);
  tarefa.value = data;
}

async function salvar() {
  await tarefaService.atualizarTarefa(route.params.id, tarefa.value);
  alert("Tarefa alterada com sucesso!");

  setTimeout(() => {
    router.push("/");
  }, 1500);
}

onMounted(carregar);
</script>

<template>
  <div class="container">
    <h2 class="titulo">Editar Tarefa: {{ tarefa.nome }}</h2>

    <form @submit.prevent="salvar" class="formulario">

      <input
        v-model="tarefa.nome"
        class="input"
        placeholder="Nome da tarefa"
        required
      />

      <textarea
        v-model="tarefa.descricao"
        class="textarea"
        placeholder="Descrição"
      ></textarea>

      <input
        type="date"
        v-model="tarefa.data"
        class="input"
      />

      <select v-model="tarefa.nivel" class="select">
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select>

      <select v-model="tarefa.status" class="select">
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluida">Concluída</option>
      </select>

      <button type="submit" class="btn-salvar">Salvar alterações</button>
    </form>
  </div>
</template>

<style scoped>

.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.titulo {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input,
.select,
.textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  transition: 0.3s ease;
}



.textarea {
  min-height: 100px;
  resize: none;
}

.btn-salvar {
  padding: 12px;
  background-color: #4f46e5;
  color: white;
  
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.25s ease;
}

.btn-salvar:hover {
  background-color: #3b73cc;
}

@media (max-width: 480px) {
  .container {
    padding: 10px;
  }

  .btn-salvar {
    font-size: 14px;
    padding: 10px;
  }
  .input,
.select,
.textarea {
  width: 90%;
 
}
}
</style>
