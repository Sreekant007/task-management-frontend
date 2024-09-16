import { client } from "./ClientApi";

export const getAllTask = () => {
  return client.get("task");
};

export const creatTask = (data) => {
  return client.post("task/create", data);
};

export const updateTask = ({ data, id }) => {
  console.log("api", data);
  return client.patch(`task/update?id=${id}`, data);
};
