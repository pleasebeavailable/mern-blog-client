import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {Provider, ReactReduxContext} from "react-redux";
import {history, store} from "./app/redux/store";
import { HistoryRouter as Router } from "redux-first-history/rr6";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    </React.StrictMode>
);

