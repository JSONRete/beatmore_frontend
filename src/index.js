import React from "react";
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'
import beatsReducer from "./reducers/beatsReducer";

import App from './components/App'

const store = createStore(beatsReducer, composeWithDevTools(applyMiddleware(thunk)))
console.log(store)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)

 