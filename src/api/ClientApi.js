import axios from "axios";
import { clearLocal, getLocalData } from "../utils/LocalStorage";
import { AppConstant } from "../constant/constant";
import { AppRoutes } from "../constant/routes";

const baseUrl = "http://localhost:3000/";
export const client = axios.create({ baseURL: baseUrl });

const handleResponseInterceptor = (request) => {
  return Promise.resolve(request?.data);
};
const handleErrorInterceptor = (error) => {
  // console.clear();
  console.log("errr", error);
  if (error.status == 401) {
    clearLocal();
    window.location.replace(AppRoutes.AUTH.SIGN_IN);
  }
  return Promise.reject(error?.response?.data);
};

const handleRequestConfig = (config) => {
  const authToken = getLocalData(AppConstant.AuthToken) || "";
  const newConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${authToken}`,
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
  };
  return Promise.resolve(newConfig);
};
client.interceptors.request.use(handleRequestConfig);
client.interceptors.response.use(
  handleResponseInterceptor,
  handleErrorInterceptor
);
