import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import BrowserRouter from  'react-router-dom/BrowserRouter';


ReactDOM.render(

        <BrowserRouter>
            <App/>
        </BrowserRouter> ,

    document.getElementById('root')
);
