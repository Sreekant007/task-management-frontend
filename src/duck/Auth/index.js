import { AppConstant } from "../../constant/constant";

export const moduleName = "auth";
export const HANDLE_SIGN_IN = `${AppConstant.AppName}/${moduleName}/HANDLE_SIGN_IN`;
export const HANDLE_SIGN_UP = `${AppConstant.AppName}/${moduleName}/HANDLE_SIGN_UP`;
export const IS_AUTH_LOADING = `${AppConstant.AppName}/${moduleName}/IS_AUTH_LOADING`;
export const GET_SNACKBAR = `${AppConstant.AppName}/${moduleName}/GET_SNACKBAR`;
export const SET_SNACKBAR = `${AppConstant.AppName}/${moduleName}/SET_SNACKBAR`;
export const DELETE_SNACKBAR = `${AppConstant.AppName}/${moduleName}/DELETE_SNACKBAR`;
export const SET_USER = `${AppConstant.AppName}/${moduleName}/SET_USER`;

export { default } from "./AuthReducers";
