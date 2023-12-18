import { Link } from "react-router-dom";
import { useFormBindingHook } from "../hooks/useFormBindingHook";
import PasswordInput from "./passwordInput";

const initialFormInput = {
  username: "",
  email: "",
  password: "",
  conpassword: "",
};
const Auth_signup = () => {
  const [formInput, onFormChangeInput, onFormSubmit] = useFormBindingHook(
    initialFormInput,
    " http://localhost:3001/users"
  );

  console.log(formInput);
  return (
    <form action="" method="post" onSubmit={onFormSubmit}>
      <div className="mb-4">
        <h2 className="text-primary fw-bold">Sign Up</h2>
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="username"
          value={formInput.username}
          onChange={onFormChangeInput}
        />
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

        <PasswordInput
          name="password"
          placeholder="*********"
          value={formInput.password}
          id="password"
          onFormChangeInput={onFormChangeInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="conpassword" className="form-label">
          Confirm password
        </label>

        <PasswordInput
          name="conpassword"
          placeholder="*********"
          value={formInput.conpassword}
          id="conpassword"
          onFormChangeInput={onFormChangeInput}
        />
      </div>

      <div className="mb-2 d-flex align-items-center">
        <span>
          Already have an account?
          <Link to="/auth-account/sign-in" className="text-primary ms-1">
            Login Here
          </Link>
        </span>
      </div>
      <div className="mt-4 d-grid d-lg-block">
        <button className="btn btn-primary d-flex align-items-center">
          <i className="bi bi-arrow-up-right-circle-fill fs-5 me-2"></i> Sign up
        </button>
      </div>
    </form>
  );
};

export default Auth_signup;
