import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import Root from './containers/Root';
import { reducer } from './reducers';

const initialState = { posts: [], subreddit: 'lisp' };

const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, document.getElementById('root'));