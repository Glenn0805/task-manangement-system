/*eslint-disable*/
import React from 'react'
import { Provider } from 'react-redux'
import store from './home-store'
import AppContainer from './AppContainer'
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom'
import './index.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <HashRouter>                 
        <Provider store={store}>
           <AppContainer/>
         </Provider>
      </HashRouter>
    </>
)