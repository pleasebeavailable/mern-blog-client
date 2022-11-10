import createSagaMiddleware from 'redux-saga'
import {configureStore,} from '@reduxjs/toolkit';
import getReducers from "./index";
import logger from "redux-logger";
import rootSaga from "./sagas/root-saga";

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

export const store = configureStore({
      reducer: getReducers(),
      initialState: {},
      middleware: [sagaMiddleware, logger]
    }
);
sagaMiddleware.run(rootSaga);
