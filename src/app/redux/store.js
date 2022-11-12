import createSagaMiddleware from 'redux-saga';
import {configureStore,} from '@reduxjs/toolkit';
import getReducers from "./index";
import rootSaga from "./sagas/root-saga";
import createSagaMonitor from "@clarketm/saga-monitor";
import {createReduxHistoryContext, reachify} from "redux-first-history";
import {createBrowserHistory} from "history";
import {createWouterHook} from "redux-first-history/wouter";
import {logger} from "redux-logger/src";

// configuration
const config = {
  level: "log",
  effectTrigger: true,
  effectResolve: true,
  actionDispatch: true
};

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

export const store = configureStore({
      reducer: getReducers(routerReducer),
      initialState: {},
      // middleware: [sagaMiddleware]
      middleware: [sagaMiddleware, routerMiddleware, logger]
    }
);

export const history = createReduxHistory(store);
//if you use @reach/router
export const reachHistory = reachify(history);
//if you use wouter
export const wouterUseLocation = createWouterHook(history);

sagaMiddleware.run(rootSaga);
