import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './components/App';
import path from 'path';
import dotenv from 'dotenv';

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
dotenv.config({ path: path.join(__dirname, `../.env.${environment}`) });

window.addEventListener('load', () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    , document.getElementById('root'));
});
