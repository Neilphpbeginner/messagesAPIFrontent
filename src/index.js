import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { RootReducer } from './reducer';
import { Container } from '@material-ui/core'
import App from './App';
import logger from 'redux-logger'
import ViewMessages from './components/ViewMessages';
import NewMessages from './components/NewMessages';
import DeleteMessageId from './components/DeleteMessageId';
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateSubJectById from './components/UpdateSubJectById';

const customHistory = createBrowserHistory();

const middleware = [thunk, logger];

const store = createStore(
    RootReducer, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


ReactDOM.render(
    <Provider store={store}>
        <Container>
            <Router>
                <Route exact path='/' component={App} />
                <Route path='/viewMessages' component={ViewMessages} />
                <Route path='/addMessage' component={NewMessages} />
                <Route path='/deleteMessageByID' component={DeleteMessageId} />
                <Route path='/updateSubjectByID' component={UpdateSubJectById} />
            </Router>
        </Container>
    </Provider>

    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
