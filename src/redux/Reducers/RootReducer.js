import { combineReducers } from "redux";
import AuthReducer, { moduleName as AuthModuleName } from "../../duck/Auth";
import TaskReducer, { moduleName as TaskModuleName } from "../../duck/Task";

export const combinReducer = {
  [AuthModuleName]: AuthReducer,
  [TaskModuleName]: TaskReducer,
};

export const RootReducer = combineReducers(combinReducer);
