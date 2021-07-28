import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from "redux";
import authReducer from './service/loginAPI/authReducer'
import getResourceReducer from './service/getAPI/getResourceReducer'


// Semantic CSS library
import 'semantic-ui-css/semantic.min.css'


const rootReducer = combineReducers({
  auth: authReducer,  // state.auth.userName
  resource: getResourceReducer,   // state.resource.
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
