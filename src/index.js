import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Primeiro from './componentes/Primeiro';
import ComParametro from './componentes/ComParametro'

ReactDOM.render(
  <div>
  <Primeiro/>
  <ComParametro titulo="Esse é o título"
     subtitulo="Este é o subtitulo"/>
   <ComParametro titulo="1.0"
     subtitulo="1.1"/>
  </div>,
  document.getElementById('root')
)


