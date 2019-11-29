import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'//import this to wrap the app in it (routing)om
import {Provider} from 'react-redux'//provider from react redux to wrap the whole app with it and takes store as prop
import store from './redux/store/store'
import './index.css';
import App from './App';


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
,
 document.getElementById('root'));
