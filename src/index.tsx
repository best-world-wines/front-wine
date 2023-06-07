import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import { App }  from './App';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
  document.getElementById('root'),
);
