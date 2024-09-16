import { client } from "./ClientApi";

export const SignIn = (payload) => client.post("users/login", payload.data);
export const SignUP = (payload) =>
  client.post("users/registration", payload.data);
