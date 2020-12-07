import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoLayer } from './context/TodoContext';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
      <App />
    </TodoLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
