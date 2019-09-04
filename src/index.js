import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import Root from './containers/Root';
import { reducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, document.getElementById('root'));