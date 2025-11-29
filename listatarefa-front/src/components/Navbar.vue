<template>
  <nav class="navbar">
    <router-link to="/">Início</router-link>
    <router-link to="/listar">Listar Tarefas</router-link>
    <router-link to="/add">Adicionar Tarefa</router-link>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 10px 15px;
  background: #4f46e5; 
  border-bottom: 1px solid #ccc;
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s;
}

.navbar a:hover {
  color: #53e5ff;
}

@media (max-width: 500px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
