Aula 16 — Validação de Schemas com Zod e NestJS
📋 Sobre o projeto

Este projeto foi desenvolvido durante a Aula 16, com o objetivo de praticar a validação de dados em uma aplicação backend utilizando NestJS, TypeScript e Zod.

A aplicação apresenta uma estrutura para validação de dados de colaboradores, utilizando schemas para definir regras e um pipe de validação para verificar as informações recebidas nas requisições HTTP.

🚀 Tecnologias utilizadas
Node.js
NestJS
TypeScript
Zod
npm
Vitest para testes automatizados
📁 Estrutura do projeto
aula16-validacao-schemas-com-zod-nestjs/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── colaborador.schema.ts
│   ├── colaboradores.controller.ts
│   ├── main.ts
│   └── zod-validation.pipe.ts
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

Entre na pasta do projeto e execute:

npm install

3. Inicie a aplicação
npm run start:dev


Por padrão, aplicações NestJS utilizam a porta 3000, salvo configuração diferente no projeto.

🧩 Principais arquivos
colaborador.schema.ts: define o schema e as regras de validação dos dados de colaboradores usando Zod.
colaboradores.controller.ts: gerencia as requisições HTTP relacionadas aos colaboradores.
zod-validation.pipe.ts: implementa um pipe para validar os dados recebidos com base em schemas Zod.
main.ts: inicializa a aplicação NestJS.
🧪 Testes

Para executar os testes unitários:

npm run test


Para executar os testes end-to-end:

npm run test:e2e


Os comandos dependem dos scripts configurados no package.json.

🎯 Conteúdos praticados
Validação de dados com Zod.
Criação e utilização de schemas.
Implementação de pipes personalizados no NestJS.
Validação de dados recebidos em requisições HTTP.
Organização de controllers e schemas.
Testes automatizados em aplicações backend.
📌 Objetivo de aprendizagem

Aprender a validar os dados de entrada de uma API REST com schemas Zod e integrar essa validação ao NestJS, ajudando a garantir que as informações recebidas atendam às regras definidas pela aplicação.

👨‍💻 Autor

Desenvolvido como atividade prática de estudos em desenvolvimento backend com NestJS, TypeScript e Zod.