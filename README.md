# Be The Hero
Repositório criado para armazenar o projeto desenvolvido durante a Semana OmniStack 11
### Anotações
#### Métdos HTTP:
- GET: Busca uma informação do back-end;
- POST: Criar uma informação no back-end;
- PUT: Alterar uma informação no back-end;
- DELETE: Deletar uma informação no back-end.

#### Tipos de Parâmetro:
- Query Paramas: São parâmetros nomeados enviados na rota após o "?" (filtros, paginação);
- Route Params: São parâmetros utilizados para identificar recursos;
- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.

#### Bancos de Dados:
- SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
- NoSQL: MongoDB, CouchDB, etc.

>Driver: SELECT * FROM users  

>Query Builder: table('users').select('*').where()  

### Comandos úteis com knex JS
- npx knex migrate:make create_ongs = Cria migration;
- npx knex = Lista todos os comandos;  
- knex migrate:rollback = Defaz último comando latest;
- Knex migrate:status = Lista migations já executadas.