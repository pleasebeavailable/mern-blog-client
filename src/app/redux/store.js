import createSagaMiddleware from 'redux-saga'
import {configureStore,} from '@reduxjs/toolkit';
import sectionSaga from "./sagas/section-saga";
import section from "./reducers/section";

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
      // getReducers(),
      reducer: section,
      initialState: {},
      middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
          sagaMiddleware)
    }
);
sagaMiddleware.run(sectionSaga);

