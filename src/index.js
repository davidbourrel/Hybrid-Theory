import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
