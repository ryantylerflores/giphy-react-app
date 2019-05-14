import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

// Allows you to view state changes using Redux Devtools in Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creates store for redux
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={ store}>
    <App />
  </Provider>, document.getElementById('root')
  );

