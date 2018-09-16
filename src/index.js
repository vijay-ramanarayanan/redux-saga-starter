import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './store/store.js'
import registerServiceWorker from './registerServiceWorker'
import StarWarContainer from './container/StarWarContainer';

ReactDOM.render(
    <Provider store={store}>
        <StarWarContainer />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
