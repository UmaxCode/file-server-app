import { useState } from "react";

import axios from "axios";
export const useFormBindingHook = (initialFormInput, url) => {
  const [formInput, setFormInput] = useState(initialFormInput);
  const [formErrors, setFormErrors] = useState(initialFormInput);
  const [submited, setSubmited] = useState(true);

  const onFormChangeInput = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Define the data you want to send in the request body
      const data = {
        ...formInput,
      };

      // form validation

      const formValidation = {};

      if (data.username?.length === 0) {
        formValidation.username = "username is required.";
      } else if (Number(data.username)) {
        formValidation.username = "username cannot be a number.";
      } else if (data.username?.length > 0 && data.username?.length < 3) {
        formValidation.username = "Length of username must be greater than 3.";
      }

      if (data.email?.length === 0) {
        formValidation.email = "email is required.";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(data.email);
        if (!isValidEmail) {
          formValidation.email = "invalid Email.";
        }
      }

      if (data.password?.length === 0) {
        formValidation.password = "password is required.";
      } else if (data.password?.length < 8) {
        formValidation.password = "password must be more 7 characters.";
      } else {
        if (data.conpassword?.length === 0) {
          formValidation.conpassword = "password confirmation required.";
        } else if (
          data.conpassword?.length &&
          data.conpassword !== data.password
        ) {
          formValidation.conpassword = "passwords do not match.";
        }
      }

      if (Object.keys(formValidation).length) {
        setFormErrors(formValidation);
        return;
      }

      // Make a POST request
      setFormErrors(formValidation);
      setSubmited(false);
      setTimeout(async () => {
        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json", // Indicates that you are sending JSON data
            Authorization: "Bearer YourAccessToken", // Example: Include an authorization token
            // Add other headers as needed
          },
        });

        // Handle the response data
        console.log("Response:", response.data);
        setSubmited(true);
        setFormInput(initialFormInput);
      }, 2000);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };
  return [formInput, onFormChangeInput, onFormSubmit, formErrors, submited];
};
