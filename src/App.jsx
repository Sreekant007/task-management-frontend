import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import SignIn from "./components/SignIn";
import { AppRoutes } from "./constant/routes";
import SignUp from "./components/SignUp";
import Task from "./components/Task";
import SnackBarContainer from "./_shared/SnackBarContainer";
import { connect } from "react-redux";
import { useEffect } from "react";

function App() {
  return (
    <>
      <SnackBarContainer />
      <Router>
        <Routes>
          {/* <Route element={<ProtectedRoutes />}>
          </Route> */}
          <Route exact path={AppRoutes.TASK.ALL_TASK} Component={Task} />;
          <Route path={AppRoutes.AUTH.SIGN_IN} Component={SignIn} />;
          <Route path={AppRoutes.AUTH.SIGN_UP} Component={SignUp} />;
          <Route path="*" element={<Navigate to={AppRoutes.AUTH.SIGN_IN} />} />
        </Routes>
      </Router>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default connect(({ auth: { isAuthLoading, user } }) => {
  return {
    isLoading: isAuthLoading,
    user,
  };
}, {})(App);
