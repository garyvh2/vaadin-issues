// Utils
import { createStore, compose as origCompose, applyMiddleware } from 'redux';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './utils/redux/redux-immutable';
// Middlewares
import { routerMiddleware } from './@redux/middlewares';

// History
import { startRouterListener } from './utils/router-helpers';
import { createBrowserHistory } from './utils/history-helpers';

// Reducers
import { routerReducer, authReducer } from './@redux/routes/reducers';

// Sagas
import { rootSaga } from './@redux/sagas';

const appReducers = combineReducers({ router: routerReducer, auth: authReducer });

export const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const router = routerMiddleware(history);


/**
 * Store Creation
 */
// eslint-disable-next-line
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

export const store = createStore(
  state => state,
  compose(
    lazyReducerEnhancer(combineReducers),
    applyMiddleware(thunk, router, sagaMiddleware),
  ),
);

/**
 * Lazy load reducers
 */
store.addReducers({ app: appReducers });

// Register Sagas
sagaMiddleware.run(rootSaga);

/**
 * Attach Global Listeners
 */
startRouterListener(history, store);

window.store = store;
