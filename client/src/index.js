import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// we import provider to connect store to our app
// will wrap the App component.
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer'


// we kick-start the app and render to dom, so we create store here.
// we relate the reducer with store and provider will relate it to our app
// we pass our store in the provider and wrap our app inside the provider component.

const store = createStore(rootReducer, composeWithDevTools(
applyMiddleware(thunk)
));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
