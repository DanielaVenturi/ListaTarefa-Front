<template>
  <div class="home-container">
    <h1 class="title">Suas Tarefas</h1>

    <div class="button-group">
      <router-link to="/add" class="btn">
        Adicionar Nova Tarefa
      </router-link>

      <router-link to="/listar" class="btn">
        Ver Minhas Tarefas
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  margin-top: -200px;
}

.title {
  font-size: 3rem;
  margin-bottom: 30px;
}

.button-group {
  display: flex;
  gap: 15px;
}

.btn {
  background-color: #4f46e5; 
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.2s;
}

.btn:hover {
  background-color: #4338ca;
}

@media (max-width: 500px) {
  .button-group {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
  }
  .home-container {
  
  margin-top: -100px;
}
}
</style>
