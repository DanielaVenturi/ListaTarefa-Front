# Relatório Técnico do Projeto: ListaTarefas

**Univille – Joinville**  
**Disciplina:** Desenvolvimento Web  
**Participantes:** Alya Angel de Souza Chaves, Carolina Vitória de Brum e Daniela Venturi  
**Cursos:** Sistemas de Informação e Engenharia de Software – 1º semestre  

---

## 1. Introdução

Este projeto foi desenvolvido como Trabalho Acadêmico Final da disciplina de Desenvolvimento Web, cujo objetivo é construir uma aplicação web completa, integrando de forma eficiente Front-end e Back-end. A proposta do professor era criar um sistema que utilizasse manipulação de dados (CRUD), apresentasse uma interface funcional e aplicasse conceitos estudados ao longo do semestre.

Sendo assim, escolhemos desenvolver uma lista de tarefas, por ser um tema simples, mas que permite explorar todos os requisitos da disciplina: criação de API, integração com banco de dados e construção de interface web interativa.

---

## 2. Objetivo do Projeto

O objetivo da aplicação é permitir que o usuário crie, visualize, edite e exclua tarefas, utilizando uma interface intuitiva no Front-end e uma API estruturada no Back-end. Buscamos aplicar a integração entre camadas, organização, uso de tecnologias modernas e também colocar em prática conceitos estudados em sala de aula.

### Funcionalidades principais:
- Cadastro de tarefas  
- Listagem de tarefas  
- Atualização de dados  
- Exclusão de tarefas  



## 3. Tecnologias Utilizadas

### 3.1 Back-end
O Back-end foi desenvolvido utilizando:

- Node.js como ambiente de execução  
- Express.js como framework principal para criação das rotas  
- Supabase como banco de dados PostgreSQL  
- Integração por meio de APIs RESTful  
- Uso de dotenv para variáveis de ambiente  
- CORS para permitir comunicação com o Front-end  

### 3.2 Front-end
Para o Front-end optamos por utilizar Vue.js, pois facilita a criação de componentes reutilizáveis, nos permitiu organizar por rotas, integrar com APIs usando uma camada de serviços e tornou o desenvolvimento mais rápido e claro. Facilitando a comunicação com o Back-end.

A interface foi desenvolvida utilizando:

- HTML para estrutura  
- CSS para estilização  
- Vue.js para lógica, interação e responsividade  
- Consumo direto da API para apresentar e manipular tarefas  



## 4. Integração Front-end e Back-end

A comunicação entre as duas camadas ocorre inteiramente via API REST, com requisições HTTP (GET, POST, PUT, DELETE).

Essa integração permitiu:

- Atualizar a interface em tempo real  
- Manter os dados sincronizados com o banco  
- Trabalhar com operações assíncronas  
- Garantir uma experiência fluida ao usuário  

A camada de serviço no Vue centraliza todas as chamadas à API, deixando a aplicação mais modular e fácil de manter.



## 5. Processo de Desenvolvimento e Desafios

Durante o desenvolvimento, enfrentamos desafios como:

- Configurar corretamente as rotas do Back-end  
- Integrar o Supabase e tratar erros de comunicação  
- Organizar os componentes Vue da melhor forma  
- Garantir que o Front-end consumisse a API corretamente  

Esses desafios foram solucionados com estudo, testes e ajustes constantes no código, o que contribuiu para nosso aprendizado sobre arquitetura web e integração de camadas.



## 6. Conclusão

O nosso projeto **“ListaTarefas”** cumpriu todos os objetivos propostos pela disciplina, demonstrando a construção de uma aplicação web completa e funcional.

Conseguimos aplicar na prática os conceitos fundamentais, tais como:

- Criação de APIs  
- Integração com banco de dados  
- Estruturação de interface  
- Comunicação entre o front-end e o back-end  
- Manipulação de dados  
- Boas práticas e boa organização do código  

Além disso, o trabalho reforçou habilidades importantes, como trabalho em equipe, divisão de responsabilidades, resolução de problemas e autonomia no desenvolvimento.

O resultado final foi uma aplicação funcional, responsiva e devidamente integrada, atendendo aos requisitos acadêmicos da disciplina e contribuindo para nosso encerramento do primeiro semestre na disciplina Desenvolvimento Web.
