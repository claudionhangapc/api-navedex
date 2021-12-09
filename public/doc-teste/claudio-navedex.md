# Project: claudio-navedex
API de um sistema web para visualização e criação dos navers, com autenticação e possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participa.
# 📁 Collection: projeto 


## End-point: create
### Method: POST
>```
>http://localhost:3000/projetos
>```
### Body (**raw**)

```json
{
    "name":"wordpress"
   
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiY2xhdWRpNUBnbWFpbC5jb20iLCJpYXQiOjE2MzkwMjA0ODd9.gXMIVqBla5_c1Dd4oVdC5PElsszLsUvP1-FvVwKGZ6-t-OC6All5je7bcTLDwufWmw0L41YNTV9x_2V-pi4kcOvDhkngy5kSIaenEPc4FKN63Oo2Pg9W9KEHBsKmQFwxtGgcesexa2Et7rt3tIWfn5Z3YrdLSxDgrCWqMhiWQpw|string|


### Response: 200
```json
{
    "id": 12,
    "name": "wordpress"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: index
### Method: GET
>```
>http://localhost:3000/projetos
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiY2xhdWRpNUBnbWFpbC5jb20iLCJpYXQiOjE2MzkwMjA0ODd9.gXMIVqBla5_c1Dd4oVdC5PElsszLsUvP1-FvVwKGZ6-t-OC6All5je7bcTLDwufWmw0L41YNTV9x_2V-pi4kcOvDhkngy5kSIaenEPc4FKN63Oo2Pg9W9KEHBsKmQFwxtGgcesexa2Et7rt3tIWfn5Z3YrdLSxDgrCWqMhiWQpw|string|


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
# 📁 Collection: user 


## End-point: signup
rota para criar um novo usuario
### Method: POST
>```
>http://localhost:3000/users/signup
>```
### Body (**raw**)

```json
{
    "email":"claudi5@gmail.com",
    "password":"BI)2KjufPySB0ilcnWkf@Wg)"
}
```

### Response: 200
```json
true
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login
### Method: POST
>```
>http://localhost:3000/users/login
>```
### Body (**raw**)

```json
{
    "email":"claudi5@gmail.com",
    "password":"BI)2KjufPySB0ilcnWkf@Wg)"
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
# 📁 Collection: naver 


## End-point: index
### Method: GET
>```
>http://localhost:3000/navers
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJjbGF1ZGlvbmhhbmdhcGMyQGdtYWlsLmNvbSIsImlhdCI6MTYzNjgzNTM2OH0.qVbOT9sv0ipD51aZ2UYSWAkvaOZJNG52QxJqkssgE4w|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: store
### Method: POST
>```
>http://localhost:3000/navers
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
	"job_role": "Desenvolvedor",
	"admission_date": "19/08/2018",
	"birthdate": "12/04/1992",
	"project":"Project Backend Test",
	"name": "Christian Tavares"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{token}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: show
### Method: GET
>```
>http://localhost:3000/navers/sow
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
