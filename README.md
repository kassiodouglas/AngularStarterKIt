# AngularStarter

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

<br>

## Development server

Run `ng serve` para o dev server. Navegue para `http://localhost:4200/`.

<br>

## Code scaffolding

Rode  `npm run cc -- --local NOME_PASTA/SUBPASTAS --name NOME_COMPONENTE` (cc=create component) para gerar componentes internos na pasta 'resources', onde estão estruturados os tipos de componentes.

Rode  `npm run ci -- --name NOME_INTERFACE` (ci=create interface) para gerar interfaces de dados na pasta 'interfaces'.

Rode  `npm run cs -- --name NOME_SERVICE` (cs=create service) para gerar serviços de dados na pasta 'services'.

`OBS: Importante usar os comandos para criação, pois eles que criam os componentes com estrutura básica e fazem a inclusão dos mesmos no núcleo da aplicação.`

<br>

## Estrutura

O projeto está estruturado da seguinte forma:

```
    ├─database
    ├─environments
    ├─src
    ├─assets
    │ ├───scss
    └─app
      ├───commands
      ├───interfaces
      ├───resources
      │   ├───components
      │   ├───layouts
      │   │   └───app
      │   ├───navigation
      │   ├───pages
      │   │   ├───home
      │   └───scss
      ├───routes
      └───services
    
```

### Onde:
`database`: arquivos de banco de dados em json para simulação de apis com <a href="https://github.com/typicode/json-server">json server</a><br>
`environments`: variaveis de ambiente<br>
`src`: engloba todas as estruturas internas<br>
`assets`: arquivos utilizados em tela como imagens, icones, estilos,etc <br>
- `scss`: estilização global. O app.scss é o arquivo base<br>

`app`: onde fica os arquivos da aplicação em si
- `commands`: comandos internos
- `interfaces`: arquivos de modelos de dados
- `resources`: arquivos onde são gerados os componentes
    - `components`: componentes que são 'pedaços de códigos' para reutilização
    - `layouts`: componetes para layouts da aplicação (uma espécie de cabeçalho). O app é o layout padrão
    - `navigation`: componetes de navegação
    - `pages`: componetes que representam páginas. Home é o componente padrão
- `routes`: arquivos de rotas
- `services`: serviços que fazem a ligação com o backend

<br>

## Routes

As rotas são criadas dentro do diretório 'routes' no arquivo 'web.ts'. Nele há a importação da classe Router(), responsável pela abstração de como são montadas as rotas.

```js
# arquivo web.ts
import { NameComponent } from "../resources/pages/NameComponent/NameComponent";
Router.set('', NameComponent);

# ou

import { NameComponent } from "../resources/pages/NameComponent/NameComponent";
Router.raw({path:'', component: NameComponent});
```

<br>

## Json Server

Para simulação de apis, é utilizado um arquivo 'db.json' na raiz do projeto em 'database'. Utilize comando `npm run jserver` para executar o servidor json server. Após iniciado o server, ele ficará diponivel em `http://localhost:3000/`. 


<br>

## Criar projetos novos

Para criação de projetos novos, siga a sequencia abaixo:

```
npm install @angular/cli
# caso não tenha o CLI do angular

npm new NOME_PROJETO
# terá duas perguntas a responder, selecione SIM e SCSS

```



