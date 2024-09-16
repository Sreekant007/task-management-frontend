import { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalData } from "./LocalStorage";
import { AppConstant } from "../constant/constant";
import { AppRoutes } from "../constant/routes";

const ProtectedRoutes = ({ user }) => {
  const auth = JSON.parse(getLocalData(AppConstant.LocalUser));
  if (!auth) <Navigate to={AppRoutes.AUTH.SIGN_IN} />;
  return <Outlet />;
};

ProtectedRoutes.propTypes = {
  user: {},
};
// eslint-disable-next-line react-refresh/only-export-components
export default connect(({ auth: { user } }) => {
  console.log(user);
  return {
    user,
  };
}, {})(ProtectedRoutes);
