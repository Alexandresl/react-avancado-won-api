# react-avancado-won-api

## Seção 9: Módulo 2: Criando a API para o Ecommerce (Won Games)

### 92. Apresentação do projeto da API da Won Games

[API completa do projeto](https://github.com/Won-Games/api)

### 93. Inicializando o Strapi

[Documentação Strapi para iniciar com a CLI](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/installation/cli.html)

[PostgreSQL create user](https://www.postgresql.org/docs/current/sql-createuser.html)

[PostgreSQL creat database](https://www.postgresql.org/docs/12/sql-createdatabase.html)

[Código feito na aula](https://github.com/Won-Games/api/commit/42a863360a3cdb605b27841187b4227525274ad4)

* Comando para entrar na interface do PostgreSQL: `sudo -u postgres psql`

* Comando para criar o usuário no PostgreSQL: `CREATE USER usuario WITH ENCRYPTED PASSWORD 'senha';`

* Comando para criar o db já adicionando os privilégios do usuário criardo: `CREATE DATABASE db OWNER usuario;`

### 94. Criando a primeira Collection Type - Categories

[Figma do projeto](https://www.figma.com/file/xwqB4b2hX8yPmp66vRuHLz/Won-Games---Em-Andamento!!?node-id=139%3A0)

[Código feito na aula](https://github.com/Won-Games/api/commit/cbad1f92ab24a47ac930bc5cea2d8166a7de5a40)

### 95. Criando Collection Type - Platforms

[Código feito na aula](https://github.com/Won-Games/api/commit/1d6378d009a85d41f677f080eb7c5c12f5ca4cc9)

### 96. Criando Collection Type - Developers

[Código feito na aula](https://github.com/Won-Games/api/commit/5fca468ee134bc4b5000ac3fd20586800f7418de)

### 97. Criando Collection Type - Publishers

[Código feito na aula](https://github.com/Won-Games/api/commit/5aa8f89e17aa7423fce798350969b2776ea06052)

### 98. Criando Collection Type - Games

[Códifo feito na aula](https://github.com/Won-Games/api/commit/bb27b8946a15f6916fb904d15acc3c39e26e79fd)

### 99. Entendendo e criando Relations - One to Many, Many

[Códifo feito na aula](https://github.com/Won-Games/api/commit/598cf5682a2011669b02a4a1dfa5e33cea361db6)

### 100. Configurando o plugin do GraphQL

### 101. Configurando o editor para CKEditor

[Plugin do CKEditor](https://github.com/Roslovets-Inc/strapi-plugin-ckeditor5)

* Comando para instalar: ```yarn add strapi-plugin-ckeditor5```

* Comando para fazer novo build clean: ```yarn build --clean```

## Seção 10: Módulo 2: Customizando o Admin do Strapi para a Won Games

### 102. Introdução a cusomização

### 103. Documentação do Strapi sobre Customização

[Pacote do strapi-admin no Github](https://github.com/strapi/strapi/tree/master/packages/strapi-admin)

[Documentação sobre customização](https://strapi.io/documentation/developer-docs/latest/development/admin-customization.html#admin-panel-customization)

### 104. Customizando a Logo da página de Login/Password/register

[Códifo feito na aula (com imagens)](https://github.com/Won-Games/api/commit/451606bf62b6c76f614e5c241383b447cf434e7e)

### 105. Editando o favicon

[Códifo feito na aula (com imagens)](https://github.com/Won-Games/api/commit/5bb787d3f34a0de114f9b7e2736483aa09e8da8f)

### 106. Removendo ícone de tutoriais

[Documentação dos vídeos tutoriais](https://strapi.io/documentation/developer-docs/latest/development/admin-customization.html#tutorial-videos)

[Código feito na aula](https://github.com/Won-Games/api/commit/435de71d9a3360745f52e9f984a9cd4b3c21f277)
