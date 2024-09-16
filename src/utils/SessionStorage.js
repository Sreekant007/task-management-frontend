import { AppConstant } from "../constant/constant";

export const setSessionData = (name, payload) => {
  return (
    payload &&
    sessionStorage(`${AppConstant.AppName}/${name}`, JSON.stringify(payload))
  );
};

export const getSessionData = (name) =>
  JSON.parse(sessionStorage.getItem(`${AppConstant.AppName}/${name}`));

export const clearSession = () => sessionStorage.clear();

export const removeSessionData = (name) =>
  sessionStorage.removeItem(`${AppConstant.AppName}/${name}`);
