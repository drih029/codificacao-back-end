# 🔐 API de Área Secreta — NestJS

Projeto desenvolvido em **NestJS** para criar uma rota protegida por uma chave de API.

## 📌 Sobre o projeto

A aplicação possui uma rota `/secreto` que verifica se o usuário enviou uma chave de API válida através do cabeçalho:

`X-api-key`

Quando a chave está correta, o sistema libera o acesso ao conteúdo secreto.

## 🔑 Chave de acesso

Para acessar a área secreta, utilize:

```text
SENAI-2026
🚀 Como executar o projeto

Instale as dependências:

npm install

Depois, execute o projeto:

npm run start:dev

A aplicação ficará disponível em:

http://localhost:3000
🔒 Rota protegida
GET /secreto

A rota precisa receber o cabeçalho:

X-api-key: SENAI-2026
✅ Acesso autorizado

Quando a chave estiver correta, a API retorna:

{
  "mensagem": "Acesso concedido ao conteudo secreto!",
  "timeStamp": "2026-09-28T00:00:00.000Z"
}

Além disso, a resposta possui o cabeçalho:

x-auth-status: verificado
❌ Acesso negado

Quando a chave estiver incorreta ou não for informada:

{
  "erro": "Forbidden",
  "mensagem": "A chave API invalida ou ausente"
}

Nesse caso, o servidor retorna o status:

403 Forbidden
🧪 Testando no Insomnia/Postman

Crie uma requisição:

GET http://localhost:3000/secreto