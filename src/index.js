import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faBolt, faBookOpen, faShoppingCart, faTags, faTimes, faStar, faStarHalf, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom';

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalf, faArrowLeft )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Route>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Route>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
