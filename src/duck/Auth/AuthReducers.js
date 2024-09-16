import { Record } from "immutable";
import { HANDLE_SIGN_IN, IS_AUTH_LOADING, SET_SNACKBAR, SET_USER } from ".";

const InitialState = Record({
  isAuthLoading: false,
  user: null,
  snackbars: [],
});
const AuthReducer = (state = new InitialState(), action) => {
  const { type, data } = action;

  switch (type) {
    case HANDLE_SIGN_IN:
      return state.set("user", data);

    case IS_AUTH_LOADING:
      return state.set("isAuthLoading", data);

    case SET_SNACKBAR:
      return state.set("snackbars", data.snackbars);

    case SET_USER:
      return state.set("user", data);

    default:
      return state;
  }
};

export default AuthReducer;
