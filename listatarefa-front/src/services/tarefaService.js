import axios from "axios";
 const api = axios.create({
    baseURL: "http://localhost:3000"
 });

 export default{
    getTarefas(){
        return api.get("/tarefas")
    }, 
    getTarefa(id){
        return api.get('/tarefas/${id}');
    },
    adicionarTarefas(tarefa){
        return api.post("/tarefas", tarefa);

    },
    atualizarTarefas(id, tarefa){
        return api.put("/tarefas/${id}", tarefa);
    },
    deletarTarefas(id){
        return api.delete('/tarefas/${id}');
    }
 };