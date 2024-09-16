import {
  GET_TASK,
  PUSH_TASK,
  SET_IS_TASK_SUCESS,
  SET_TASK_CREATE,
  SET_TASK_LOADING,
  SET_TASK_UPDATE,
} from ".";

export const getTask = () => ({
  type: GET_TASK,
  data: {},
});

export const setTaskLoading = (payload) => ({
  type: SET_TASK_LOADING,
  data: payload,
});

export const creatTask = (payload) => ({
  type: SET_TASK_CREATE,
  data: payload,
});

export const pushTask = (payload) => ({
  type: PUSH_TASK,
  data: payload,
});

export const updateTask = (payload) => ({
  type: SET_TASK_UPDATE,
  data: payload,
});

export const setSubmitStatus = (payload) => ({
  type: SET_IS_TASK_SUCESS,
  data: payload,
});
