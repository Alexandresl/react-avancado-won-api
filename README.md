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

### 107. Mudando a logo do menu esquerdo

[Código feito na aula](https://github.com/Won-Games/api/commit/f0f6289af06722c39211d7455ff7c7c2adfdf990)

### 108. Themes do Strapi e mudando o background color do LeftMenuHeader

### 109. Refatorando o styled component para uma forma mais organizada

[Código feito na aula](https://github.com/Won-Games/api/commit/eec778ec8bdcebeb2e1925e97d829c5175548eec)

### 110. Customizando o background de todo o LeftMenu

[Código feito na aula](https://github.com/Won-Games/api/commit/a32c3b4f2ad248b2b42f70d61218cedc78b0d1c1)

### 111. Customizando o LeftMenuLinkSection e identificando elementos com React DevTools

[Código feito na aula](https://github.com/Won-Games/api/commit/ddc58f30ddf518c089c55f1eaa7948cacd61ed75)

### 112. Customizando o hover dos links do menu

[Código feito na aula](https://github.com/Won-Games/api/commit/44f7bd0cce166e1463c8e9a22e0b14ffa138cc53)

### 113. Customizando o MenuLeftFooter

[Código feito na aula](https://github.com/Won-Games/api/commit/32ce5033f96ed1d693935c6db47dd4b3b22c8cea)

### 114. Customizando a Home Page

[Código feito na aula](https://github.com/Won-Games/api/commit/b27b00d25fa9f92a50ab7bf8df944f1d743c4708)

## Seção 11: Módulo 2: Criando e baixando plugins no Strapi

### 115. Introdução ao plugin (repositories)

[Site oficial do Buffet.js](https://buffetjs.io/)

[Documentação do desenvolvimento de plugins locais](https://strapi.io/documentation/developer-docs/latest/development/local-plugins-customization.html#local-plugins)

### 116. Gerando o esqueleto do plugin

[Documentação do desenvolvimento de plugins locais](https://strapi.io/documentation/developer-docs/latest/development/local-plugins-customization.html#local-plugins)

[Código feito na aula](https://github.com/Won-Games/api/commit/f9d05544fa9556aae1b1d2886ee5a75b68f19875)

* Comando para criação do plugin: ```yarn strapi generate:plugin nome-do-plugin```

### 117. Modificando ícone e nome no menu

[API do objeto plugins](https://strapi.io/documentation/developer-docs/latest/development/local-plugins-customization.html#api)

[Código feito na aula](https://github.com/Won-Games/api/commit/09a4c581e0936beb777bf8bfd818ae4ba504c27c)

### 118. Criando a página e a lógica do plugin

[Custom Header - Buffet](https://buffetjs.io/storybook/?path=/story/custom-header--simple)

[Custom Table - Buffet](https://buffetjs.io/storybook/?path=/story/components-table--simple)

[Código feito na aula](https://github.com/Won-Games/api/commit/9fe782b91d07c35ba4358d1ada04e163e1b61c0d)

[CORREÇÃO do código](https://github.com/Won-Games/api/pull/1/files)

### 119. Instalando plugin externo

[Meu PR no projeto original](https://github.com/node-vision/strapi-plugin-entity-relationship-chart/pull/3)

[Código feito na aula](https://github.com/Won-Games/api/commit/01d52ac27b2aa7aef94a9ff008bf87cce1375ad2)

## Seção 12: Módulo 2: Criando Scrapper de dados para popular a API da Won Games

### 120. Apresentando o scrapper

[Site oficial da Gog.com](https://www.gog.com/)

### 121. Conceitos de rotas e controllers

[Documentação sobre controllers](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#controllers)

[Documentação sobre rotas](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#routing)

### 122. Criando rota e controller para o populate

[Código feito na aula](https://github.com/Won-Games/api/commit/7870403b0e539c0bf279cb2ed730ec97488b2591)

### 123. Entendendo o ctx (Contexto de response/request do Koa)

[Documentação sobre ctx (request/response)](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#requests-responses)

[Código feito na aula](https://github.com/Won-Games/api/commit/4587982c9864cf18d03c550b6a940354798a5b32)

### 124. Conceitos dos services

[Documentação sobre Services](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#services)

### 125. Buscando dados com o service.find

[Código feito na aula](https://github.com/Won-Games/api/commit/a407ee6402b35715ee1e9ea115b83ece75b225be)

