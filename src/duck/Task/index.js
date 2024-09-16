import { AppConstant } from "../../constant/constant";

export const moduleName = "task";
export const GET_TASK = `${AppConstant.AppName}/${moduleName}/GET_TASK`;
export const SET_TASK = `${AppConstant.AppName}/${moduleName}/SET_TASK`;
export const SET_TASK_LOADING = `${AppConstant.AppName}/${moduleName}/SET_TASK_LOADING`;
export const SET_TASK_CREATE = `${AppConstant.AppName}/${moduleName}/SET_TASK_CREATE`;
export const SET_TASK_UPDATE = `${AppConstant.AppName}/${moduleName}/SET_TASK_UPDATE`;
export const PUSH_TASK = `${AppConstant.AppName}/${moduleName}/PUSH_TASK`;
export const SET_IS_TASK_SUCESS = `${AppConstant.AppName}/${moduleName}/SET_IS_TASK_SUCESS`;
export const GET_TASK_UPDATE = `${AppConstant.AppName}/${moduleName}/GET_TASK_UPDATE`;

export { default } from "./TaskReducer";
