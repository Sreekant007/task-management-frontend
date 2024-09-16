import createSagaMiddleware from "redux-saga";
import { thunk } from "redux-thunk";
// import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, compose } from "redux";
import { RootReducer } from "./Reducers/RootReducer";
import sagaWatcher from "./RootSaga/RootSaga";
const sagaMiddleware = createSagaMiddleware();

export const middleware = [sagaMiddleware, thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = configureStore({
//   reducer: RootReducer,
//   middleware: applyMiddleware(middleware),
// });

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagaWatcher);

export default store;
