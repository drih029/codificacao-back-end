# Aula 05 - Variáveis de Ambiente e Configuração

Projeto desenvolvido para demonstrar o uso de variáveis de ambiente em aplicações Node.js utilizando a biblioteca `dotenv`.

## Objetivo

Aprender a:

* Configurar variáveis de ambiente com `.env`
* Utilizar a biblioteca `dotenv`
* Separar configurações do código-fonte
* Evitar expor informações sensíveis no projeto

## Tecnologias Utilizadas

* Node.js
* JavaScript (ES Modules)
* dotenv

## Estrutura do Projeto

```text
.
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/aula05-variaveis-ambiente-configuracao.git
```

Acesse a pasta do projeto:

```bash
cd aula05-variaveis-ambiente-configuracao
```

Instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
API_KEY_PAGAMENTO=sk_live_998877766554433221100
DATABASE_URL=mongodb://localhost:27017/meu_banco
```

## Código Principal

O arquivo `index.js` carrega as variáveis de ambiente e valida a configuração da aplicação.

Exemplo:

```javascript
import dotenv from 'dotenv';

dotenv.config();

function iniciarAplicacao() {
    const porta = process.env.PORT || 8080;
    const apiKey = process.env.API_KEY_PAGAMENTO;
    const dbUrl = process.env.DATABASE_URL;

    if (!apiKey) {
        console.error(
            'ERRO CRÍTICO: a chave API_KEY_PAGAMENTO não está nas variáveis de ambiente!'
        );
        process.exit(1);
    }

    console.log('=== SERVIÇO DE CONFIGURAÇÃO CARREGADO ===');
    console.log(`Servidor rodando na porta: ${porta}`);
    console.log(`Conexão com banco de dados: ${dbUrl}`);
    console.log(
        `Status da API de Pagamento: chave de tamanho ${apiKey.length}, autenticada`
    );
}

iniciarAplicacao();
```

## Executando o Projeto

Execute o comando:

```bash
npm start
```

Ou:

```bash
node index.js
```

## Saída Esperada

```text
=== SERVIÇO DE CONFIGURAÇÃO CARREGADO ===
Servidor rodando na porta: 3000
Conexão com banco de dados: mongodb://localhost:27017/meu_banco
Status da API de Pagamento: chave de tamanho 24, autenticada
```

## Arquivo .gitignore

```gitignore
.env
node_modules/
*.log
```

## Boas Práticas

* Nunca envie o arquivo `.env` para o GitHub.
* Utilize um arquivo `.env.example` para documentar as variáveis necessárias.
* Mantenha chaves de API e senhas fora do código-fonte.
* Valide variáveis obrigatórias na inicialização da aplicação.

## Licença

Projeto criado para fins educacionais.
