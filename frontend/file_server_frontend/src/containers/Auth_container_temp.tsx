import "./Auth_container_temp.css";
import { Outlet } from "react-router-dom";
import authImage from "../assets/images/authentication_image.svg";
const Auth_container_temp = () => {
  return (
    <div className="container-fluid auth-temp-container bg-white">
      <div className="row h-100">
        <div className="col-lg-6 auth-col-left">
          <img src={authImage} alt="image to represent authentication" />
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div
            className="auth-form-container w-75 
          "
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth_container_temp;
