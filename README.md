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

## Endereço de Deploy - GitHub Pages

*add url do GitHub Pages

## Protótipo

https://www.figma.com/proto/XarePPgeODdsLiyjL1r02e/controle-de-selos?type=design&node-id=115-3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=115%3A3

## Checklist

- [X] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [X] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [X] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [X] Construir páginas web com o conceito de componentes.
- [X] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [X] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [X] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [X] Mapear componentes à rotas no módulo de rotas.
- [X] Criar navegação entre páginas por meio de rotas.
- [X] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [ ] Validar campos do formulário com REGEX e apresentar os erros.
- [ ] Desabilitar o botão de submit enquanto o formulário está inválido.
- [ ] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [ ] Cadastrar uma entidade no JSON Server.
- [ ] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [ ] Usar a diretiva ngIf
- [ ] Formatar a apresentação de dados com Pipes.
- [ ] Build e deploy da aplicação.


## Informações tecnicas

node v18.16.0  
angular v16.0.0 
json-server v0.17.3 

## Manual de execução

npm install

npm start 

or
 
npm run json:server  
ng serve  