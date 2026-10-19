Aula 17 — Documentação com Swagger no NestJS

Projeto desenvolvido durante a Aula 17, com foco na documentação de uma API REST utilizando NestJS, Swagger e OpenAPI.

🚀 Tecnologias utilizadas
Node.js
NestJS
TypeScript
Swagger / OpenAPI
Postman
📋 Objetivos da aula
Configurar a documentação OpenAPI no NestJS.
Documentar endpoints utilizando decorators do Swagger.
Descrever os dados de entrada com DTOs.
Testar requisições HTTP utilizando o Postman.
Disponibilizar uma interface interativa para consulta e teste da API.
⚙️ Instalação

Clone o repositório e acesse a pasta do projeto:

git clone URL_DO_SEU_REPOSITORIO
cd NOME_DA_PASTA


Instale as dependências:

npm install


Caso as dependências do Swagger ainda não estejam instaladas:

npm install @nestjs/swagger

▶️ Executando o projeto

Inicie a aplicação em modo de desenvolvimento:

npm run start:dev


Por padrão, a API utiliza a porta 3000.

📚 Documentação Swagger

Com o servidor em execução, acesse:

http://localhost:3000/docs

A interface Swagger permite visualizar os endpoints, consultar exemplos de requisição e testar as operações disponíveis.

🔗 Endpoints
Método	Rota	Descrição
GET	/status	Consulta o status da API
POST	/produtos	Cadastra um produto
GET	/docs	Exibe a documentação Swagger no navegador
📦 Exemplo de cadastro de produto

Método: POST

URL: http://localhost:3000/produtos

Body — JSON:

{
  "nome": "Arroz 5kg",
  "preco": 25.90,
  "categoria": "Alimentos"
}

Resposta esperada

Status: 201 Created

{
  "id": 101,
  "nome": "Arroz 5kg",
  "preco": 25.9,
  "categoria": "Alimentos",
  "criadoEm": "2026-10-19T12:00:00.000Z"
}


O identificador é fixo no exemplo atual, e a data de criação é gerada automaticamente. Os dados ainda não são persistidos em um banco de dados.

🧪 Testando com Postman
Inicie a aplicação.
Crie uma requisição POST.
Informe http://localhost:3000/produtos.
Selecione Body → raw → JSON.
Insira o JSON de exemplo.
Clique em Send e verifique a resposta.
📌 Conceitos praticados
Controllers e rotas HTTP.
DTOs (Data Transfer Objects).
Decorators do NestJS.
ApiProperty, ApiTags, ApiOperation e ApiResponse.
Configuração da documentação OpenAPI com DocumentBuilder e SwaggerModule.
🔮 Melhorias futuras
Implementar persistência em banco de dados.
Criar operações para listar, consultar, atualizar e excluir produtos.
Adicionar validação dos dados de entrada.
Implementar autenticação e autorização.
Desenvolver testes automatizados.

Curso: Desenvolvimento Back-End
Aula: 17 — Documentação com Swagger no NestJS

Projeto desenvolvido para fins educacionais.