import { all } from "redux-saga/effects";
import { AuthSaga } from "../../duck/Auth/AuthSaga";
import { TaskSaga } from "../../duck/Task/TaskSaga";

export default function* sagaWatcher() {
  yield all([AuthSaga(), TaskSaga()]);
}
