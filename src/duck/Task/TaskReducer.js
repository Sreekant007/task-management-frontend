import { Record } from "immutable";
import {
  GET_TASK_UPDATE,
  PUSH_TASK,
  SET_IS_TASK_SUCESS,
  SET_TASK,
  SET_TASK_LOADING,
} from ".";

const InitialState = Record({
  task: [],
  isTaskSumited: true,
  isTaskLoading: false,
});
const TaskReducer = (state = new InitialState(), action) => {
  const { type, data } = action;

  switch (type) {
    case SET_TASK:
      console.log("REDUX", data);
      return state.set("task", data);
    case SET_TASK_LOADING:
      return state.set("isTaskLoading", data.payload);
    case PUSH_TASK:
      return state.set("task", [...state.get("task"), data]);
    case SET_IS_TASK_SUCESS:
      return state.set("isTaskSumited", data);
    case GET_TASK_UPDATE:
      console.log("DD", data);
      return state
        .get("task")
        .map((item) => (item.id === data.id ? data : item));
    default:
      return state;
  }
};

export default TaskReducer;
