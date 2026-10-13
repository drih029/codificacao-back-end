Aula 15 — Tratamento de Erros e Status Codes
📋 Sobre o projeto

Este projeto foi desenvolvido durante a Aula 15, com o objetivo de praticar o tratamento de erros e a utilização dos códigos de status HTTP em uma aplicação backend utilizando NestJS e TypeScript.

A aplicação contém uma estrutura para gerenciamento de produtos, utilizando controllers e services para organizar as responsabilidades da aplicação.

🚀 Tecnologias utilizadas
Node.js
NestJS
TypeScript
npm
Vitest para testes automatizados
📁 Estrutura do projeto
aula15-tratamento-erros-status-codes/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── produtos.controller.ts
│   └── produtos.service.ts
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


A aplicação será iniciada em modo de desenvolvimento. Por padrão, aplicações NestJS utilizam a porta 3000, salvo configuração diferente no projeto.

🧪 Testes

Para executar os testes disponíveis, utilize os scripts definidos no package.json.

Exemplos comuns em projetos NestJS:

npm run test

npm run test:e2e

🎯 Conteúdos praticados
Organização de aplicações com NestJS.
Separação entre controllers e services.
Tratamento de erros em requisições HTTP.
Utilização de códigos de status HTTP.
Testes automatizados de aplicações backend.
📌 Objetivo de aprendizagem

Compreender como tratar erros de forma adequada em uma API REST, retornando respostas HTTP coerentes para diferentes situações e melhorando a comunicação entre o servidor e o cliente.

👨‍💻 Autor

Desenvolvido como atividade prática de estudos em desenvolvimento backend com NestJS e TypeScript.