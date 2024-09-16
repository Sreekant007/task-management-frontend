import { all, takeLatest } from "redux-saga/effects";
import { GET_TASK, SET_TASK_CREATE, SET_TASK_UPDATE } from ".";
import * as Saga from "./Saga";

export function* TaskSaga() {
  all[
    (yield takeLatest(GET_TASK, Saga.handleGetTask),
    yield takeLatest(SET_TASK_CREATE, Saga.handleCreateTask),
    yield takeLatest(SET_TASK_UPDATE, Saga.handleUpdateTask))
  ];
}
