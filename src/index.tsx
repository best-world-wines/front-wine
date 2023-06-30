import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import { App }  from './App';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
  document.getElementById('root'),
);
