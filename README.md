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

### Conceitos do React:
- Componentes no react são funcões que retornam html;
- Quando o html está dentro do JS, ele é chamado de JSX (JavaScript XML);
- Estado: informação que será mantida pelo componente;
- Imutabilidade: Não se pode manipular uma variável de forma direta, é preciso sobrepopor a variável.

[Pacote de icones útilizado](https://feathericons.com/)

### React Native: Diferença de elementos e outros conceitos:
- View: Equivalente a Div, header, footer, aside. Utilizado em containers ou section;
- Text: Qualquer tipo de texto seja paragrafo ou título;
- Não possui semântica;
- Propriedades: São atributos repassados de um componente pai para o filho;
- Herança: Não existe herança de estilos no react-native, portanto cada elemento possui sua própria estilização;

[Pacote de envio de e-mail utilizado](https://docs.expo.io/versions/latest/sdk/mail-composer/)

## Erros que tive no desenvolvimento:

- Erro ao iniciaizar Expo
```
npm WARN deprecated core-js@1.2.7: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3. 
```
- Solução:
[Instalar o instalar o Yarn seguindo as intruções do site](https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable)
e executar o comando:
```
expo init mobile --yarn
```

- Mensagem de Erro:
```
internal/fs/watchers.js:177
    throw error;
    ^
Error: ENOSPC: System limit for number of file watchers reached, watch
```
- Solução: Executar no terminal os comandos
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

cat /proc/sys/fs/inotify/max_user_watches

fs.inotify.max_user_watches=524288
```
