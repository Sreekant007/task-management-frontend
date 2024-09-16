import { Button, Form, InputGroup } from "react-bootstrap";
import "./SignIn.scss";

import { bool } from "prop-types";
import { SvgIcons } from "../../constant/SGVIcons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constant/routes";
import AppLoader from "../../_shared/AppLoader/AppLoader";
import { connect, useDispatch } from "react-redux";
import { handleSignIn } from "../../duck/Auth/AuthActions";
import { getLocalData } from "../../utils/LocalStorage";
import { AppConstant } from "../../constant/constant";

function SignIn({ isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = getLocalData(AppConstant.LocalUser);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const EmailIcon = SvgIcons.EmailIcon();
  const PasswordEyeIcon = SvgIcons.PasswordEyeIcon();
  const PasswordHideEyeIcon = SvgIcons.PasswordHideIcon();

  useEffect(() => {
    if (!user) {
      navigate(AppRoutes.AUTH.SIGN_IN, { replace: true });
    } else {
      navigate(AppRoutes.TASK.ALL_TASK, { replace: true });
    }
  }, []);

  const onSubmit = async (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    dispatch(handleSignIn(body));
  };
  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Sign In </h2>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>

            <InputGroup>
              <InputGroup.Text>{EmailIcon}</InputGroup.Text>
              <Form.Control
                placeholder="Email"
                isInvalid={errors?.email}
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
            </InputGroup>
            {errors.email && errors.email.type === "required" && (
              <small className="error-text">Email is required</small>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <small className="error-text">Email is not valid</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password </Form.Label>

            <InputGroup>
              <InputGroup.Text
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? PasswordEyeIcon : PasswordHideEyeIcon}
              </InputGroup.Text>
              <Form.Control
                placeholder="Password"
                type={isPasswordVisible ? "text" : "password"}
                isInvalid={errors?.password}
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
            </InputGroup>
            {errors.password && errors.password.type === "required" && (
              <small className="error-text">Password is required</small>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <small className="error-text">
                Password must atleast 6 characters
              </small>
            )}
          </Form.Group>
          <p className="register-text">
            Don’t have an account ?
            <span onClick={() => navigate(AppRoutes.AUTH.SIGN_UP)}>
              &nbsp; Sign up
            </span>
          </p>
          <Button
            variant="primary"
            type="submit"
            className="login-btn"
            onClick={handleSubmit(onSubmit)}
          >
            {isLoading ? <AppLoader /> : "Sign In"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  isLoading: bool,
};
// eslint-disable-next-line react-refresh/only-export-components
export default connect(({ auth: { isAuthLoading, user } }) => {
  console.log(user);
  return {
    isLoading: isAuthLoading,
  };
}, {})(SignIn);
