import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {Provider} from "react-redux";
import {history, store} from "./app/redux/store";
import {HistoryRouter as Router} from "redux-first-history/rr6";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

const root = ReactDOM.createRoot(document.getElementById('root'));
let persist = persistStore(store);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <Router history={history}>
            <App/>
          </Router>
        </PersistGate>
      </Provider>
    </React.StrictMode>
);

