# Projeto
> pokemon

## Indíce
* [Informação](#informação)
* [Requisitos](#requisitos)
* [Ambiente](#ambiente)
* [Arquitetura de pastas](#arquitetura-de-pastas)
* [Instalação](#instalação)
* [Rotas](#rotas)

## Informação
Projeto para cadastro de pokemons via excel

## Clone
Para iniciar as configurações clone o projeto
https://github.com/jaquemaggot/pokemon.git

## Requisitos
* [Node 14.16.1](https://nodejs.org/en/)
* [Mysql 5.7](https://www.mysql.com/)

##Primeira ação
**Criar a tabela no banco de dados:**

```sh
executar o script init.sql no banco de dados Mysql
```

## Ambiente
Configure as variáveis de ambiente:
* Use um arquivo `.env`: **(Use o arquivo .env.example como referência)**
* Deixe no arquivo .env apenas as informações que estão sendo passadas, caso não esteja passando todas apague a linha

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

**Instalar as dependências:**

```sh
npm i
```

**Executar o projeto:**

```sh
npm start
```

## Rotas

```bash
Para testar as rotas utilize Insomnia ou Postman
GET - /pokemon -> lista todos os pokemons de forma paginada com filtros (query na url)

parametros (query parameters):
 - page -> pagina solicitada (default 1)
 - limit -> quantidade de registros por pagina (default 10)
 - name -> nome do pokemon
 - number -> numero do pokemon
 - type1 -> tipo 1 do pokemon
 - type2 -> tipo 1 do pokemon
 - spa -> SPA do pokemon
 - spd -> SPD do pokemon
 - spe -> SPE do pokemon
 - total_status -> status total do pokemon
```

```bash
GET - /pokemon/number -> busca um pokemon pelo numero
```

```bash
POST - /pokemon/excel -> cadastrar ou atualizar os pokemons atraves de uma planilha
*Coloque a Planilha excel na pasta, Planilha (\app\public\planilha)
```
