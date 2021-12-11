# api-navedex

API de um sistema web para visualização e criação dos navers, com autenticação e possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participa. A documentação completa da api desenvolvida pode ser acessada clicando <a href="https://documenter.getpostman.com/view/14806594/UVJkBtfB">aqui</a>

## Modelo Lógico

!["modelo_logico"](public/img/modelo_logico_certo.png)

## Pré-requisito

- [x] Node.js - você pode saber mais <a href="https://nodejs.org/en/about/">aqui</a>
- [x] PostgreSQL - você pode saber mais <a href="https://www.postgresql.org/">aqui</a>

## Instalação

1. Clona o projeto no diretório da tua maquina.
2. Cria um banco de dados de nome 'navedex' `CREATE DATABASE navedex; `
3. Entra na pasta raiz do projeto e executa o seguinte comando na linha de comando `npm install`
4. No arquivo .env localizado na raiz do projeto altere os valores das variaveis de ambiente POSTGRES_USER e POSTGRES_PORT de acordo com o definido na tua instancia do PostgreSQL.
5. Ainda na raiz do projeto execute o seguinte comando para criar as tabelas do banco de dados `npx knex migrate:latest`
6. executa o seguinente comandando `npm run start` para rodar o projeto e copia e cola no navegador a seguinte url `http://localhost:3000/ping` para verificar se a instalação foi bem sucedida.

# Project: claudio-navedex

API de um sistema web para visualização e criação dos navers, com autenticação e possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participa.

# 📁 Collection: user

## End-point: signup

rota para criar um novo usuario

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
  "id": 10,
  "email": "claudi5@gmail.com",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiY2xhdWRpNUBnbWFpbC5jb20iLCJpYXQiOjE2MzkwMjA0ODd9.gXMIVqBla5_c1Dd4oVdC5PElsszLsUvP1-FvVwKGZ6-t-OC6All5je7bcTLDwufWmw0L41YNTV9x_2V-pi4kcOvDhkngy5kSIaenEPc4FKN63Oo2Pg9W9KEHBsKmQFwxtGgcesexa2Et7rt3tIWfn5Z3YrdLSxDgrCWqMhiWQpw"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: projeto

## End-point: index

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

### Method: GET

> ```
> http://localhost:3000/projetos/2
> ```

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
  "name": "teste",
  "navers": []
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                                                                                                                     | Type   |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiY2xhdWRpNUBnbWFpbC5jb20iLCJpYXQiOjE2MzkwMjA0ODd9.gXMIVqBla5_c1Dd4oVdC5PElsszLsUvP1-FvVwKGZ6-t-OC6All5je7bcTLDwufWmw0L41YNTV9x_2V-pi4kcOvDhkngy5kSIaenEPc4FKN63Oo2Pg9W9KEHBsKmQFwxtGgcesexa2Et7rt3tIWfn5Z3YrdLSxDgrCWqMhiWQpw | string |

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

## End-point: Delete

Rota Para Deletar um Projeto

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

## End-point: Update

### Method: PUT

> ```
> http://localhost:3000/projetos/1
> ```

### Body (**raw**)

```json
{
  "name": "daina",
  "navers": [1, 2]
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

# 📁 Collection: naver

## End-point: index

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

### Method: GET

> ```
> http://localhost:3000/navers/1
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
  "name": "Christian Tavares"
}
```

### 🔑 Authentication bearer

| Param | value     | Type   |
| ----- | --------- | ------ |
| token | {{token}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete

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
