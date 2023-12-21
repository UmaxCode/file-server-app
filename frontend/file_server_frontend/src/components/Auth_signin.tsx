import { Link, useNavigate } from "react-router-dom";

import google_icon from "../assets/images/google_icon.png";

import { useFormBindingHook } from "../hooks/useFormBindingHook";
import PasswordInput from "./passwordInput";
import ActionButton from "./Buttons/actionButton";
import axios from "axios";
import { FormEvent } from "react";

const initialFormInput = {
  email: "",
  password: "",
};

const Auth_signin = () => {
  const navigate = useNavigate();
  const [
    formInput,
    setFormInput,
    onFormChangeInput,
    validator,
    formErrors,
    formActionState,
    setFormActionState,
  ] = useFormBindingHook(initialFormInput);

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      ...formInput,
    };

    const validationState = validator(data); // form validator function

    if (validationState) {
      try {
        setFormActionState({ ...formActionState, submit: false });
        setTimeout(async () => {
          const response = await axios.post(
            "http://localhost:3001/logins",
            data,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer YourAccessToken",
              },
            }
          );

          // Handle the response data
          console.log("Response:", response.data);
          setFormActionState({ notify: false, submit: true });
          setFormInput(initialFormInput);
          navigate("/");
        }, 2000);
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    }
  };

  return (
    <form method="post" onSubmit={onFormSubmit} noValidate>
      <div className="mb-4">
        <h2 className="text-primary fw-bold">Sign In</h2>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="example.com"
          value={formInput.email}
          onChange={onFormChangeInput}
        />
        <div className="text-danger ps-2">{formErrors.email}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>

        <PasswordInput
          name="password"
          placeholder="*********"
          value={formInput.password}
          id="password"
          onFormChangeInput={onFormChangeInput}
        />
        <div className="text-danger ps-2">{formErrors.password}</div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me?
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <Link to="">forget password?</Link>
          </div>
        </div>
      </div>
      <div className="mt-4 d-grid d-lg-block">
        <ActionButton formActionState={formActionState} signup={false} />
      </div>
      <div className="">
        <p className="text-center mt-3 fw-bold">OR</p>
        <div className="d-grid">
          <button className="btn border-primary text-primary">
            Login with google account
            <img
              src={google_icon}
              alt="a google icon"
              width={25}
              className="ms-1"
            />
          </button>
        </div>
      </div>
      <div className="mt-3 d-flex align-items-center justify-content-center">
        <span>
          Don't have an account?
          <Link to="/auth-account/sign-up" className="text-primary ms-1">
            Signup Here
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Auth_signin;
