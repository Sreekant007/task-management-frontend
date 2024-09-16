import { AppConstant } from "../constant/constant";

export const setLocalData = (name, payload) => {
  return (
    payload &&
    localStorage.setItem(
      `${AppConstant.AppName}/${name}`,
      JSON.stringify(payload)
    )
  );
};

export const getLocalData = (name) =>
  JSON.parse(localStorage.getItem(`${AppConstant.AppName}/${name}`));

export const clearLocal = () => localStorage.clear();

export const removeLocalData = (name) =>
  localStorage.removeItem(`${AppConstant.AppName}/${name}`);
