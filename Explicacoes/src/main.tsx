import React from 'react'
import ReactDOM from 'react-dom/client'
// O ReactDOM é uma biblioteca que faz parte do ecossistema do React e é responsável por atualizar o DOM (Document Object Model) de acordo com as mudanças na sua aplicação React. Ele permite que você renderize componentes do React no navegador web ou em ambientes similares, como por exemplo em aplicações com React Native.
import { App } from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// ReactDOM.createRoot(document.getElementById('root')!).render()
//Este trecho de código cria um "root" para a renderização dos componentes do React. O método createRoot é utilizado para criar um novo "root" de renderização no DOM, e document.getElementById('root') é usado para selecionar o elemento no DOM com o id "root" onde os componentes serão renderizados.
//.render(): Este método é utilizado para renderizar um componente dentro do "root" criado anteriormente.

//<React.StrictMode>
//O React.StrictMode é um componente especial do React que ajuda a identificar potenciais problemas em sua aplicação durante o desenvolvimento. Ele não renderiza nenhum UI visível, mas ativa verificações extras e avisos durante a renderização dos componentes filhos.