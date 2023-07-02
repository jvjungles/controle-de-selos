# controle-de-selos

Sistema de Controle - Catálogo Filatélico - Selos


Solução simples e prática para colecionadores de Selos que desejam manter uma organização e controle em sua coleção.
	
O objetivo principal deste sistema é  facilitar a organização e a coleção de selos filatélicos.  
O software é um Sistema Web  Angular typescript que gerencia duas entidades: "Album" e "Selo".   
Permite aos usuários criar, visualizar, atualizar e excluir álbuns e selos. Cada álbum pode conter vários selos e cada selo pertence somente a um álbum.

Apresenta uma interface gráfica intuitiva e fácil de usar, com as seguintes funcionalidades principais:

* Criar um novo Album;
* Listar todos os Albuns;
* Atualizar um Album;
* Excluir um Album;
* Adicionar um novo Selo a um Album..
* Listar todos os Selos de um Album.
* Atualizar um Selo de um Album.
* Excluir um Selo de um Album.

	
Permite aos usuários visualizar todos os álbuns e selos existentes e atualizar suas informações a qualquer momento.  
Além disso, os usuários podem facilmente excluir um álbum ou selo que não precisam mais.

O frontend da aplicação desenvolvida com Angular e o backend foi simulado pela implementação de API Fake, usando o JSON Server.

## Documentação (Projeto Completo)

https://github.com/jvjungles/controle-de-selos/blob/main/docs/JoaoJungles-ProjetoCompleto.pdf

## Endereço de Deploy - GitHub Pages

https://jvjungles.github.io/controle-de-selos/

## Protótipo

https://www.figma.com/proto/XarePPgeODdsLiyjL1r02e/controle-de-selos?type=design&node-id=115-3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=115%3A3

## Checklist

- [X] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [X] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [X] Construir páginas web com o conceito de componentes.
- [X] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [X] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [X] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [X] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [X] Mapear componentes à rotas no módulo de rotas.
- [X] Criar navegação entre páginas por meio de rotas.
- [X] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [X] Validar campos do formulário com REGEX e apresentar os erros.
- [X] Desabilitar o botão de submit enquanto o formulário está inválido.
- [X] Cadastrar uma entidade no Web Storage.
- [X] Fazer requisições a API com tratamento da resposta com Promises (pode usar Fetch API, async/await ou lastValueFrom do RXJS).
- [X] Cadastrar uma entidade no JSON Server.
- [X] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [X] Usar a diretiva ngIf
- [X] Formatar a apresentação de dados com Pipes.
- [X] Fazer requisições a API com tratamento da resposta com Observables.
- [X] Build e deploy da aplicação.


## Informações tecnicas

node v18.16.0  
angular v16.0.0  
json-server v0.17.3 


## Manual de execução
<br>

- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm install`
- Para rodar a aplicação, temos duas opções:
	- Opção 01 - rodar local:
		- Executar o comando  `npm start` que automaticamente executará os comandos `ng serve` e `npm run json:server` atraves do **concurrently**
  			- Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`
  			- A aplicação executa na pasta `localhost:4200`
	- Opção 02 - rodar pelo Github pages:
		- Executar a API Fake (JSON Server): 
			- Execução via script registrado no `package.json`: `npm run json:server` 
			- Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`
			- Acessar o link https://jvjungles.github.io/controle-de-selos/    

