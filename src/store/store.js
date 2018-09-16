import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from "../reducers/StarWarReducer.js";
import mySaga from './sagas';


/**
 * Run method is referred to as task
 * This is the glue between store and generator function mySaga
 */
const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleWare)
    );

sagaMiddleWare.run(mySaga);