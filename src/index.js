import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import './index.css';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
