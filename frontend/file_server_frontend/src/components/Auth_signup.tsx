import { Link } from "react-router-dom";
import { useFormBindingHook } from "../hooks/useFormBindingHook";
import axios from "axios";

const initialFormInput = {
  username: "",
  email: "",
  password: "",
  conpassword: "",
};
const Auth_signup = () => {
  const [formInput, onFormChangeInput] = useFormBindingHook(initialFormInput);
  console.log(formInput);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Define the data you want to send in the request body
      const data = {
        ...formInput,
      };

      // Make a POST request
      const response = await axios.post(
        "https://example.com/api/endpoint",
        data,
        {
          headers: {
            "Content-Type": "application/json", // Indicates that you are sending JSON data
            Authorization: "Bearer YourAccessToken", // Example: Include an authorization token
            // Add other headers as needed
          },
        }
      );

      // Handle the response data
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };
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
      <div className="mb-3">
        <label htmlFor="conpassword" className="form-label">
          Confirm password
        </label>
        <input
          type="conpassword"
          className="form-control"
          id="conpassword"
          name="conpassword"
          placeholder="***********"
          value={formInput.conpassword}
          onChange={onFormChangeInput}
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
