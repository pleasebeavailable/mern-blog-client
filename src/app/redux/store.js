import createSagaMiddleware from 'redux-saga';
import {configureStore,} from '@reduxjs/toolkit';
import getReducers from "./index";
import rootSaga from "./sagas/root-saga";
import {createReduxHistoryContext, reachify} from "redux-first-history";
import {createBrowserHistory} from "history";
import {createWouterHook} from "redux-first-history/wouter";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {persistReducer} from 'redux-persist'
import {logger} from "redux-logger/src";

// configuration for saga
// const config = {
//   level: "log",
//   effectTrigger: true,
//   effectResolve: true,
//   actionDispatch: true
// };

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const sagaMiddleware = createSagaMiddleware({
  // sagaMonitor: createSagaMonitor(config)
});

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({
  history: createBrowserHistory(),
  //other options if needed
});

const persistedReducer = persistReducer(persistConfig,
    getReducers(routerReducer));

export const store = configureStore({
      reducer: persistedReducer,
      initialState: {},
      // middleware: [sagaMiddleware, routerMiddleware]
      middleware: [sagaMiddleware, routerMiddleware, logger]
    }
);

export const history = createReduxHistory(store);
//if you use @reach/router¬
export const reachHistory = reachify(history);
//if you use wouter
export const wouterUseLocation = createWouterHook(history);

sagaMiddleware.run(rootSaga);
