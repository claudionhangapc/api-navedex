# api-navedex

API de um sistema web para visualização e criação dos navers, com autenticação e possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participa. A documentação completa da api desenvolvida pode ser acessada clicando <a href="https://documenter.getpostman.com/view/14806594/UVJkBtfB">aqui</a>

# Modelo Lógico

!["modelo_logico"](public/img/modelo_logico_certo.png)

# Pré-requisito

- [x] Node.js - você pode saber mais <a href="https://nodejs.org/en/about/">aqui</a>
- [x] PostgreSQL - você pode saber mais <a href="https://www.postgresql.org/">aqui</a>

# Instalação

1. Clona o projeto no diretório da tua maquina.
2. Cria um banco de dados de nome 'navedex' `CREATE DATABASE navedex; `
3. Entra na pasta raiz do projeto e executa o seguinte comando na linha de comando `npm install`
4. No arquivo .env localizado na raiz do projeto altere os valores das variaveis de ambiente POSTGRES_USER e POSTGRES_PORT de acordo com o definido na tua instancia do PostgreSQL.
5. Ainda na raiz do projeto execute o seguinte comando para criar as tabelas do banco de dados `npx knex migrate:latest` e `npx knex seed:run` para preencher as tabelas com dados inicias.
6. executa o seguinente comandando `npm run start` para rodar o projeto e copia e cola no navegador a seguinte url `http://localhost:3000/ping` para verificar se a instalação foi bem sucedida.

# Project: api-navedex

## 📁 Collection: user

## End-point: signup

Rota para criar um novo usuário  
Deverá receber email e senha e criar novo registro no banco

### Method: POST

> ```
> http://localhost:3000/users/signup
> ```

### Body (**raw**)

```json
{
  "email": "claudi5@gmail.com",
  "password": "BI)2KjufPySB0ilcnWkf@Wg)"
}
```

### Response: 200

```json
true
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login

Rota para poder logar no sistema  
Deverá retornar um token JWT para o usuário ter acesso à outras rotas

### Method: POST

> ```
> http://localhost:3000/users/login
> ```

### Body (**raw**)

```json
{
  "email": "emaildteste@gmail.com",
  "password": "12#rer"
}
```

### Response: 200

```json
{
  "id": 1,
  "email": "emaildteste@gmail.com",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlbWFpbGR0ZXN0ZUBnbWFpbC5jb20iLCJpYXQiOjE2MzkyNzA5NzF9.QmE-ighkQcQxVqn5rWx2hGubbGc3rPwaKWo7NlHH2toA7Oq31DVKUdESm5VopOYYm-9SFjyiXmXREO8aDwOevUZ0DLrxWfE5TDPPp3Ytw9gDb7MppVMScpoZ4mT6u5-rFJ5cEU4TCANBAGDcrrqjXs2DHfc7_nlBSduBduGSQqM"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 Collection: projeto

## End-point: index

Rota para listagem dos Projetos

O retorno é um array com todos os projetos, pertencentes ao usuário que fez a request,

### Method: GET

> ```
> http://localhost:3000/projetos
> ```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
[
  {
    "id": 10,
    "name": "trabalhando com java"
  },
  {
    "id": 11,
    "name": "desenvolvimento de loja virtual"
  },
  {
    "id": 12,
    "name": "wordpress"
  }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: show

Rota para detalhar um projeto  
Além das informações do projeto, trazer quais foram os navers que participaram

### Method: GET

> ```
> http://localhost:3000/projetos/1
> ```

### Body (**raw**)

```json

```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
{
  "id": 1,
  "name": "Trabalhando com Java",
  "navers": [
    {
      "id": 1,
      "name": "Christian Tavares",
      "birthdate": "1992-04-12T03:00:00.000Z",
      "admission_date": "2018-08-19T03:00:00.000Z",
      "job_role": "Desenvolvedor",
      "id_user": 1
    },
    {
      "id": 2,
      "name": "Daina",
      "birthdate": "1992-04-12T03:00:00.000Z",
      "admission_date": "2018-08-19T03:00:00.000Z",
      "job_role": "Teste",
      "id_user": 1
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: store

### Method: POST

> ```
> http://localhost:3000/projetos
> ```

### Body (**raw**)

```json
{
  "name": "teste7",
  "navers": [1]
}
```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
{
  "id": 17,
  "name": "wordpress",
  "navers": [
    {
      "id": 7
    },
    {
      "id": 8
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update

Rota Para Atualização de Projeto

Recebe através do body da request os dados do projeto e um array com os identificadores dos navers que trabalham nele e atualiza seu registro no banco de dados

### Method: PUT

> ```
> http://localhost:3000/projetos/1
> ```

### Body (**raw**)

```json
{
  "name": "daina",
  "navers": [1]
}
```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
{
  "id": 1,
  "name": "claudio",
  "navers": [1, 2]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete

Rota Para Deletar um Projeto  
Recebe um identificador de projeto e o remove dos registros do banco

### Method: DELETE

> ```
> http://localhost:3000/projetos/14
> ```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
1
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 Collection: naver

## End-point: index

O retorno é um array com todos os navers  
O retorno é um array com todos os navers, pertencentes ao usuário que fez a request

### Method: GET

> ```
> http://localhost:3000/navers
> ```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
[
  {
    "id": 1,
    "name": "Christian Tavares",
    "birthdate": "1992-04-12T03:00:00.000Z",
    "admission_date": "2018-08-19T03:00:00.000Z",
    "job_role": "Desenvolvedor"
  },
  {
    "id": 2,
    "name": "Daina",
    "birthdate": "1992-04-12T03:00:00.000Z",
    "admission_date": "2018-08-19T03:00:00.000Z",
    "job_role": "Teste"
  }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: show

Rota para detalhar informações de um único naver através de seu identificador  
Além das informações do naver, trazer quais projetos este participou

### Method: GET

> ```
> http://localhost:3000/navers/2
> ```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
{
  "id": 1,
  "name": "Christian Tavares",
  "birthdate": "1992-04-12T03:00:00.000Z",
  "admission_date": "2018-08-19T03:00:00.000Z",
  "job_role": "Desenvolvedor",
  "projects": [
    {
      "id": 1,
      "name": "Trabalhando com Java"
    },
    {
      "id": 2,
      "name": "PHP"
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: store

Rota de Criação de Naver  
Recebe através do body da request os dados do naver e um array com os identificadores dos projetos que ele participa e cria um novo registro no banco de dados vinculado ao usuário que fez a request

### Method: POST

> ```
> http://localhost:3000/navers
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "job_role": "Desenvolvedor",
  "admission_date": "19/08/2018",
  "birthdate": "12/04/1992",
  "project": "Project Backend Test",
  "name": "Christian Tavares",
  "projects": [1, 2]
}
```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
{
  "id": 11,
  "name": "Christian Tavares",
  "birthdate": "1992-04-12T03:00:00.000Z",
  "admission_date": "2018-08-19T03:00:00.000Z",
  "job_role": "Desenvolvedor",
  "projects": [1, 2]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update

Recebe através do body da request os dados do naver e um array com os identificadores dos projetos que ele participa e atualiza seu registro no banco de dados

### Method: PUT

> ```
> http://localhost:3000/navers
> ```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
{
  "id": 9,
  "name": "claudio nhanga",
  "birthdate": "1992-04-12T03:00:00.000Z",
  "admission_date": "2018-08-19T03:00:00.000Z",
  "job_role": "Desenvolvedor",
  "navers": [1, 2]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete

Rota Para Deletar um Naver  
Recebe um identificador de projeto e o remove dos registros do banco.

### Method: DELETE

> ```
> http://localhost:3000/navers/1
> ```

### 🔑 Authentication bearer

| Param | value      | Type   |
| ----- | ---------- | ------ |
| token | {{token }} | string |

### Response: 200

```json
1
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
