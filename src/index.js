import './index.css';
import store from "./Redux/redux-store";
import * as serviceWorker from './serviceWorker';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}><App/></Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

