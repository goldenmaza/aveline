import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/App';

import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
dotenv.config({ path: path.join(__dirname, `../.env.${environment}`) });

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    <React.StrictMode>
);
