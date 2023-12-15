import { Link } from "react-router-dom";

import google_icon from "../assets/images/google_icon.png";

import { useFormBindingHook } from "../hooks/useFormBindingHook";

const initialFormInput = {
  email: "",
  password: "",
};

const Auth_signin = () => {
  const [formInput, onFormChangeInput] = useFormBindingHook(initialFormInput);
  console.log(formInput);
  return (
    <form action="" method="post">
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
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="***********"
          value={formInput.password}
          onChange={onFormChangeInput}
        />
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
        <button className="btn btn-primary d-flex align-items-center">
          <i className="bi bi-arrow-down-circle-fill fs-5 me-2"></i> Sign in
        </button>
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
            Login Here
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Auth_signin;
