import { applyMiddleware, compose, createStore } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './reducers/rootReducer.js'


function configureStoreProd(initialState) {
    const middlewares = []

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)))
}

function configureStoreDev(initialState) {
    const middlewares = [reduxImmutableStateInvariant()]

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)))

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers/rootReducer', () => {
            const nextReducer = require('./reducers/rootReducer').default // eslint-disable-line global-require

            store.replaceReducer(nextReducer)
        })
    }

    return store
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
