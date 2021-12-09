# api-navedex

API de um sistema web para visualização e criação dos navers, com autenticação e possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participa.

## Modelo Lógico

!["modelo_logico"](public/img/modelo_logico_2.png)

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

## Detalhes da api

### Usuário (publica)

#### criar um novo usuário

##### POST signup

`http://localhost:3000/users/signup`

Example Request

```
curl --location --request POST 'http://localhost:3000/users/signup' \
--data-raw '{
    "email":"claudi5@gmail.com",
    "password":"BI)2KjufPySB0ilcnWkf@Wg)"
}'
```

Example Response 200 ok

```
- Header
  content-type: application/json; charset=utf-8
  content-length: 4
  Date: Thu, 09 Dec 2021 03:05:27 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5

- Body
  true
```

#### Fazer login com o usuário criado

##### POST login

`http://localhost:3000/users/login`

Example Request

```
curl --location --request POST 'http://localhost:3000/users/login' \
--data-raw '{
    "email":"claudi5@gmail.com",
    "password":"BI)2KjufPySB0ilcnWkf@Wg)"
}'
```

Example Response 200 ok

```
- Header
  content-type: application/json; charset=utf-8
  content-length: 329
  Date: Thu, 09 Dec 2021 03:28:07 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5

- Body
  {
  "id": 10,
  "email": "claudi5@gmail.com",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiY2xhdWRpNUBnbWFpbC5jb20iLCJpYXQiOjE2MzkwMjA0ODd9.gXMIVqBla5_c1Dd4oVdC5PElsszLsUvP1-FvVwKGZ6-t-OC6All5je7bcTLDwufWmw0L41YNTV9x_2V-pi4kcOvDhkngy5kSIaenEPc4FKN63Oo2Pg9W9KEHBsKmQFwxtGgcesexa2Et7rt3tIWfn5Z3YrdLSxDgrCWqMhiWQpw"
  }
```

### Projeto (privada)

#### criar um novo projeto

##### POST create

`http://localhost:3000/projetos`

AUTHORIZATION Bearer Token

Example Request

```
curl --location --request POST 'http://localhost:3000/projetos' \
--data-raw '{
    "name":"wordpress"
}'
```

Example Response 200 ok

```
- Header
  content-type: application/json; charset=utf-8
  content-length: 28
  Date: Thu, 09 Dec 2021 04:00:15 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5

- Body
  {
  "id": 12,
  "name": "wordpress"
  }
```

#### lista todos projetos

##### GET index

`http://localhost:3000/projetos`

AUTHORIZATION Bearer Token

Example Request

```
curl --location --request GET 'http://localhost:3000/projetos'
```

Example Response 200 ok

```
- Header
  content-type: application/json; charset=utf-8
  content-length: 121
  Date: Thu, 09 Dec 2021 04:10:37 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5

- Body
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
