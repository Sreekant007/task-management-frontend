import { all, takeEvery, takeLatest } from "redux-saga/effects";
import {
  DELETE_SNACKBAR,
  GET_SNACKBAR,
  HANDLE_SIGN_IN,
  HANDLE_SIGN_UP,
} from ".";
import * as Saga from "./Saga";

export function* AuthSaga() {
  all[
    (yield takeLatest(HANDLE_SIGN_IN, Saga.handleSignInWorker),
    yield takeEvery(HANDLE_SIGN_UP, Saga.handleSignUpWorker),
    yield takeEvery(GET_SNACKBAR, Saga.getSnackbarWorker),
    yield takeEvery(DELETE_SNACKBAR, Saga.deleteSnackbarWorker))
  ];
}
