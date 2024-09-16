import { call, delay, put, select } from "redux-saga/effects";
import { IS_AUTH_LOADING, SET_SNACKBAR, SET_USER } from ".";

import { v4 as uuid } from "uuid";
import { setSnackbar } from "./AuthActions";
import { AppConstant, snackbarTypes } from "../../constant/constant";
import { SignIn, SignUP } from "../../api/AuthApi";
import { setLocalData } from "../../utils/LocalStorage";
import { AppRoutes } from "../../constant/routes";

export function* handleSignInWorker(data) {
  yield put({
    type: IS_AUTH_LOADING,
    payload: true,
  });

  try {
    const response = yield call(SignIn, data);
    if (response.status == "Success") {
      const userObj = response.user;
      setLocalData(AppConstant.AuthToken, response.user.token);
      delete userObj.token;
      setLocalData(AppConstant.LocalUser, JSON.stringify(response.user));
      yield put({
        type: SET_USER,
        data: response.user,
      });
      yield put({
        type: IS_AUTH_LOADING,
        payload: false,
      });
      yield put(
        setSnackbar({
          text: response.message,
          type: snackbarTypes.info,
        })
      );
    }
    window.location.replace(AppRoutes.TASK.ALL_TASK);
  } catch (error) {
    yield put(
      setSnackbar({
        text: error.message,
        type: snackbarTypes.error,
      })
    );
  }
}
export function* handleSignUpWorker(data) {
  yield put({
    type: IS_AUTH_LOADING,
    payload: true,
  });

  try {
    const response = yield call(SignUP, data);
    if (response.status == "Success") {
      const userObj = response.user;
      setLocalData(AppConstant.AuthToken, response.user.token);
      delete userObj.token;
      setLocalData(AppConstant.LocalUser, JSON.stringify(response.user));
      yield put({
        type: SET_USER,
        data: response.user,
      });
      yield put({
        type: IS_AUTH_LOADING,
        payload: false,
      });
      yield put(
        setSnackbar({
          text: response.message,
          type: snackbarTypes.info,
        })
      );
    }
    window.location.replace(AppRoutes.TASK.ALL_TASK);
  } catch (error) {
    yield put(
      setSnackbar({
        text: error.message,
        type: snackbarTypes.error,
      })
    );
  }
}

export function* getSnackbarWorker({ data: { snackbar, delayTime } }) {
  const {
    auth: { snackbars },
  } = yield select();
  const id = uuid();
  yield put({
    type: SET_SNACKBAR,
    data: {
      snackbars: [
        ...snackbars,
        {
          ...snackbar,
          id,
        },
      ],
    },
  });
  yield delay(delayTime);
  yield deleteSnackbarWorker({ payload: { id } });
}

export function* deleteSnackbarWorker({ payload: { id } }) {
  const {
    auth: { snackbars },
  } = yield select();

  const newSnackbars = id
    ? snackbars.filter((snackbar) => snackbar.id !== id)
    : [];

  yield put({
    type: SET_SNACKBAR,
    data: {
      snackbars: [...newSnackbars],
    },
  });
}
