import { call, put } from "redux-saga/effects";
import { handleAuthLoading, setSnackbar } from "../Auth/AuthActions";
import { snackbarTypes } from "../../constant/constant";
import { IS_AUTH_LOADING } from "../Auth";
import { creatTask, getAllTask, updateTask } from "../../api/TaskApi";
import {
  GET_TASK_UPDATE,
  SET_IS_TASK_SUCESS,
  SET_TASK,
  SET_TASK_LOADING,
} from ".";
import { setTaskLoading } from "./TaskAction";

export function* handleGetTask(data) {
  yield put({
    type: SET_IS_TASK_SUCESS,
    data: false,
  });
  yield put({
    type: IS_AUTH_LOADING,
    payload: true,
  });
  try {
    const response = yield call(getAllTask, data);
    if (response.task) {
      yield put({
        type: SET_TASK,
        data: response.task,
      });
    }
    yield put({
      type: IS_AUTH_LOADING,
      payload: false,
    });
  } catch (error) {
    yield put(
      handleAuthLoading({
        type: IS_AUTH_LOADING,
        payload: false,
      })
    );

    yield put(
      setSnackbar({
        text: error?.message,
        type: snackbarTypes.error,
      })
    );
  }
}

export function* handleCreateTask({ data }) {
  yield put({
    type: SET_IS_TASK_SUCESS,
    data: false,
  });
  yield put(
    setTaskLoading({
      type: SET_TASK_LOADING,
      payload: false,
    })
  );
  try {
    const response = yield call(creatTask, data);
    console.log("RR", response);
    yield put(
      setTaskLoading({
        type: SET_TASK_LOADING,
        payload: false,
      })
    );

    if (response.status == "Success") {
      yield put({
        type: SET_IS_TASK_SUCESS,
        data: true,
      });

      yield put(
        setSnackbar({
          text: response?.message,
          type: snackbarTypes.info,
        })
      );
    }
  } catch (error) {
    yield put(
      setTaskLoading({
        type: SET_TASK_LOADING,
        payload: false,
      })
    );

    yield put(
      setSnackbar({
        text: error?.message,
        type: snackbarTypes.error,
      })
    );
  }
}

export function* handleUpdateTask({ data }) {
  yield put({
    type: SET_IS_TASK_SUCESS,
    data: false,
  });
  yield put(
    setTaskLoading({
      type: SET_TASK_LOADING,
      payload: false,
    })
  );
  try {
    const response = yield call(updateTask, data);

    yield put(
      setTaskLoading({
        type: SET_TASK_LOADING,
        payload: false,
      })
    );

    if (response.status == "Success") {
      yield put(
        setSnackbar({
          text: response?.message,
          type: snackbarTypes.info,
        })
      );
    }
  } catch (error) {
    yield put(
      setTaskLoading({
        type: SET_TASK_LOADING,
        payload: false,
      })
    );

    yield put(
      setSnackbar({
        text: error?.message,
        type: snackbarTypes.error,
      })
    );
  }
}
