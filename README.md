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
