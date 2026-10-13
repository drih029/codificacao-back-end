Aula 17 — Documentação com Swagger e NestJS
📋 Sobre o projeto

Este projeto foi desenvolvido durante a Aula 17, com o objetivo de aprender a documentar APIs REST utilizando Swagger em uma aplicação desenvolvida com NestJS e TypeScript.

O Swagger permite visualizar e explorar os endpoints da API por meio de uma interface interativa, facilitando o entendimento e os testes das requisições HTTP.

🚀 Tecnologias utilizadas
Node.js
NestJS
TypeScript
Swagger
NestJS Swagger
npm
Vitest para testes automatizados
📁 Estrutura do projeto
aula17-documentacao-com-swagger-nestjs/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
│   └── app.e2e-spec.ts
├── package.json
├── tsconfig.json
└── README.md

⚙️ Como executar o projeto
1. Pré-requisitos

Certifique-se de ter instalado:

Node.js
npm
Git (opcional)
2. Instale as dependências
npm install

3. Execute a aplicação
npm run start:dev


Por padrão, aplicações NestJS utilizam a porta 3000, salvo configuração diferente no projeto.

📚 Documentação com Swagger

Após iniciar a aplicação, acesse a rota de documentação configurada no projeto. Em aplicações NestJS, um endereço comum é:

http://localhost:3000/api


Observação: o endereço /api é apenas um exemplo. A rota correta depende da configuração do Swagger no arquivo src/main.ts.

A interface do Swagger permite visualizar os endpoints documentados e testar as requisições diretamente pelo navegador.

🧪 Testes

Para executar os testes unitários:

npm run test


Para executar os testes end-to-end:

npm run test:e2e


Os comandos disponíveis dependem dos scripts definidos no package.json.

🎯 Conteúdos praticados
Introdução à documentação de APIs REST.
Integração do Swagger com NestJS.
Documentação de endpoints HTTP.
Exploração e teste de requisições pela interface Swagger.
Organização de aplicações backend.
Testes automatizados.
📌 Objetivo de aprendizagem

Aprender a documentar APIs REST de maneira clara e interativa, facilitando o desenvolvimento, os testes e a integração entre aplicações e equipes.

👨‍💻 Autor

Desenvolvido como atividade prática de estudos em desenvolvimento backend com NestJS, TypeScript e Swagger.