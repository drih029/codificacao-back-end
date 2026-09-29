# Aula 13 - Middlewares e Interceptors com NestJS

Projeto desenvolvido durante a aula sobre **Middlewares e Interceptors** utilizando NestJS.

## Tecnologias

- Node.js
- NestJS
- TypeScript
- Vitest

## Rotas

### Rota pública

```http
GET /Status

Retorna:

{
  "message": "Rota Publica acessada com sucesso!",
  "data": "data atual"
}

Rota administrativa
GET /Status/admin

Retorna:

{
  "message": "Bem-vindo ao Painel Admnistrativo!",
  "data": "data atual"
}

Middleware
O projeto possui um middleware personalizado para registrar as requisições:

src/logger/logger.middleware.ts

O middleware é aplicado a todas as rotas da aplicação:

consumer.apply(LoggerMiddleware).forRoutes('*');

Como executar
Instale as dependências:

npm install

Execute o projeto:

npm run start:dev

A aplicação estará disponível em:

http://localhost:3000

Testes
npm test

Objetivo
Praticar a criação e utilização de Middlewares no NestJS, trabalhando com interceptação e registro das requisições.
EOF

git add README.md
git commit -m "docs: adiciona README da aula 13"


Se você estiver usando **PowerShell no Windows**, me diga que te passo o comando equivalente, porque esse `cat <<EOF` é mais adequado para Git Bash/Linux.


