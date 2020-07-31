import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


//desafio criar game para página de erro
const Pagina404 = () => (<div>Página 404</div>)


ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/" component={Home} exact/>
  <Route path="/cadastro/video" component={CadastroVideo} />
  <Route component={Pagina404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


