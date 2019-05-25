import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import Root from './Root';

import './index.scss';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
