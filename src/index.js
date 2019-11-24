import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'//import this to wrap the app in it (routing)
import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
,
 document.getElementById('root'));
