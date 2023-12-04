<div align="center">

# REACT

</div>

## O que é :thinking:

É uma biblioteca JavaScript de código aberto
com foco em criar interfaces de usuário em
páginas web. É mantido pelo Facebook, Instagram, outras
empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Airbnb, Walmart e outros.

### Baseado em Componentes

Com o react podemos criar componentes
encapsulados que gerenciam seu próprio
estado e então, combinar estes
componentes para criar UI’s complexas.

#### DRY

*“Don’t Repeat Yourself”* ou "não se repita" em
português.

A ideia é que não é necessário repetir códigos, já
que a criação de componentes permite o
reaproveitamento. Por exemplo, podemos usar
um mesmo componente de botão em várias
partes da aplicação, alterando apenas o
necessário e o evento acionado no clique. Dessa
forma, reaproveitamos o CSS e a estrutura HTML
desse botão.

#### SRP

*“Single Responsiblity Principle”* ou "Princípio da
Responsabilidade Única" em português.

De forma simplificada, cada função do seu
código deve ter uma responsabilidade. Em nosso
caso, como o function component é uma função
e um componente, cada componente deverá ter
apenas uma responsabilidade.

#### SPA

*“Single Page Applications”* ou "Aplicações de Única Página"

O objetivo de uma SPA é concentrar
toda uma aplicação em um único documento HTML que é entregue ao
navegador.

Toda mudança de página em uma aplicação do estilo SPA é feita usando
Javascript e não requer, necessariamente, chamadas ao lado servidor.
Assim as mudanças são mais rápidas e eficientes, mas requer um maior
processamento no navegador.

<div align="center">

## Criando o projeto

</div>

### Vite

[Vite](https://vitejs.dev) é uma ferramenta de construção de projetos de frontend que se destina a oferecer uma experiência de desenvolvimento mais rápida e leve para projetos de web modernos. Ela consiste em duas partes principais:

- Um servidor de desenvolvimento que oferece melhorias de funcionalidade ricas sobre módulos de ECMAScript nativo, por exemplo Substituição de Módulo Instantânea extremamente rápida.

- Um comando de construção que empacota o nosso código com a Rollup, pré-configurado para produzir recursos estáticos altamente otimizados para produção.

#### Primeiro passo

Dentro da pasta que você deseja criar o projeto rode este comando:

~~~bash
npm create vite@latest
~~~

ou

~~~bash
yarn create vite
~~~

Após rodar o comando, o terminal irá mostrar o seguinte input:

~~~bash
? Project name: >> vite-project
~~~

Neste input é onde inserimos o nome do projeto que desejamos criar, caso dermos enter sem inserir um nome, o projeto ficará com o nome padrão (vite-project)

Após isso basta selecionar no terminal o framework (no caso o React) e a variante (no caso o TypeScript) e pronto! O projeto sera gerado.

#### Segundo passo passo (instalar as dependências)

Ainda no terminal, após termos feito os passos anteriores, rodamos o seguinte comando para acessar a pasta:

~~~bash
cd (nome da pasta)
~~~

Tendo acessado a pasta, rodamos o seguinte comando para intalar as dependências:

~~~bash
npm install
~~~

ou 

~~~bash
yarn install
~~~

Com isso feito, o projeto estará pronto para desenvolvimento :rocket::rocket::rocket: