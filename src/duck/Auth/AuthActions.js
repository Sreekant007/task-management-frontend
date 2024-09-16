import {
  DELETE_SNACKBAR,
  GET_SNACKBAR,
  HANDLE_SIGN_IN,
  HANDLE_SIGN_UP,
  IS_AUTH_LOADING,
  SET_USER,
} from ".";
import { AppConstant } from "../../constant/constant";

export const handleSignIn = (payload) => ({
  type: HANDLE_SIGN_IN,
  data: payload,
});

export const handleSignUp = (payload) => ({
  type: HANDLE_SIGN_UP,
  data: payload,
});

export const handleAuthLoading = (payload) => ({
  type: IS_AUTH_LOADING,
  data: payload,
});

export const setSnackbar = (
  snackbar,
  delayTime = AppConstant.SnackbarDeplay
) => ({
  type: GET_SNACKBAR,
  data: { snackbar, delayTime },
});

export const deleteSnackbar = (id) => ({
  type: DELETE_SNACKBAR,
  payload: { id },
});

export const setUser = (payload) => ({ type: SET_USER, data: payload });
