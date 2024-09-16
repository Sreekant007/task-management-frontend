import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SvgIcons } from "../../constant/SGVIcons";
import AppLoader from "../../_shared/AppLoader/AppLoader";
import { AppRoutes } from "../../constant/routes";
import { bool } from "prop-types";
import "../SignIn/SignIn.scss";
import { connect, useDispatch } from "react-redux";
import { handleSignUp } from "../../duck/Auth/AuthActions";
import { getLocalData } from "../../utils/LocalStorage";
import { AppConstant } from "../../constant/constant";
function SignUp({ isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const distpatch = useDispatch();
  const user = getLocalData(AppConstant.LocalUser) || null;
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

  const onSubmit = (data) => {
    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    distpatch(handleSignUp(body));
  };
  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Sign In </h2>
        <Form className="login-form">
          <Form.Group className="mb-3">
            <Form.Label>First Name </Form.Label>

            <InputGroup>
              <InputGroup.Text>{EmailIcon}</InputGroup.Text>
              <Form.Control
                placeholder="First Name"
                isInvalid={errors?.firstName}
                name="firstName"
                {...register("firstName", {
                  required: true,
                })}
              />
            </InputGroup>
            {errors.firstName && (
              <small className="error-text">First Name is required</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name </Form.Label>

            <InputGroup>
              <InputGroup.Text>{EmailIcon}</InputGroup.Text>
              <Form.Control
                placeholder="Last Name"
                isInvalid={errors?.lastName}
                name="lastName"
                {...register("lastName", {
                  required: true,
                })}
              />
            </InputGroup>
            {errors.firstName && (
              <small className="error-text">Last Name is required</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>

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
            Already have an account ?
            <span onClick={() => navigate(AppRoutes.AUTH.SIGN_IN)}>
              &nbsp; Sign In
            </span>
          </p>
          <Button
            variant="primary"
            className="login-btn"
            onClick={handleSubmit(onSubmit)}
          >
            {isLoading ? <AppLoader /> : "Sign Up"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  isLoading: bool,
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(({ auth: { isAuthLoading, user } }) => {
  return {
    isLoading: isAuthLoading,
  };
}, {})(SignUp);
