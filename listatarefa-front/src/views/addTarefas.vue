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
  <div class="add-container">
    <h2 class="titulo">Adicionar Tarefa</h2>

    <form @submit.prevent="add" class="form">
      <input
        v-model="tarefa.nome"
        placeholder="Nome"
        required
        class="input"
      />

      <textarea
        v-model="tarefa.descricao"
        placeholder="Descrição"
        class="textarea"
      ></textarea>

      <input type="date" v-model="tarefa.data" class="input" />

      <select v-model="tarefa.nivel" class="select">
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select>

      <select v-model="tarefa.status" class="select">
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluída">Concluída</option>
      </select>

      <button type="submit" class="btn-salvar">Salvar</button>
    </form>
  </div>
</template>

<style scoped>
.add-container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}

.titulo {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #333;
}

/* Form */
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Inputs */
.input,
.select,
.textarea {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fafafa;
  transition: 0.2s;
  width: 100%;
}

.input:focus,
.select:focus,
.textarea:focus {
  border-color: #999;
  box-shadow: 0 0 5px #ccc;
}

.textarea {
  resize: vertical;
  height: 80px;
}

/* Botão */
.btn-salvar {
  padding: 12px;
  border: 0;
  border-radius: 8px;
  background: #b3d1ff;
  cursor: pointer;
  transition: 0.2s;
  font-size: 1rem;
  font-weight: bold;
}

.btn-salvar:hover {
  background: #96bfff;
}

/* Responsividade */
@media (max-width: 600px) {
  .titulo {
    font-size: 1.5rem;
  }

  .btn-salvar {
    width: 100%;
  }
}
</style>
