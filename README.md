# Projeto
> pokemon

## Indíce
* [Informação](#informação)
* [Requisitos](#requisitos)
* [Ambiente](#ambiente)
* [Arquitetura de pastas](#arquitetura-de-pastas)
* [Instalação](#instalação)

## Informação
Projeto para cadastro de pokemons via excel

## Requisitos
* [Node 14.16.1](https://nodejs.org/en/)
* [Mysql 5.7](https://www.mysql.com/)

## Ambiente
Configure as variáveis de ambiente:
* Use um arquivo `.env`: **(Use o arquivo .env.example como referência)**

| Nome                           | Descrição                                                     | Valor Padrao | Obrigatorio |
|--------------------------------|---------------------------------------------------------------|--------------|-------------|
| MYSQL_USER                     | Usuario do Mysql                                              |              | &check;     |
| MYSQL_PASSWORD                 | Senha do usuario do Mysql                                     |              | &check;     |
| MYSQL_HOST                     | Host do Mysql                                                 |              | &check;     |
| MYSQL_DATABASE                 | Database do Mysql                                             |              | &check;     |
| MYSQL_CONNECTION_LIMIT         | Quantidade de conexoes simultaneas do Mysql                   |      1       |             |

## Arquitetura de pastas
### Diretórios
```bash
pokemon
  |-- app
    |-- config
      dbconnection.js
      server.js
    |-- controller
    |-- repository
    |-- service
    |-- public
      |--images
    |-- routes
    |-- utils
      mysql.js
    app.js
  README.md
  package.json
  .env
  .gitignore
  init.sql	
```

## Instalação

Acessar a pasta raiz do projeto:

**Criar a tabela no banco de dados:**

```sh
executar o script init.sql no banco de dados Mysql
```

**Instalar as dependências:**

```sh
npm i
```

**Executar o projeto:**

```sh
nodemon app\app.js
```
