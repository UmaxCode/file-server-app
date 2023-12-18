import { useState } from "react";

import axios from "axios";
export const useFormBindingHook = (initialFormInput, url) => {
  const [formInput, setFormInput] = useState(initialFormInput);

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

      // Make a POST request
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json", // Indicates that you are sending JSON data
          Authorization: "Bearer YourAccessToken", // Example: Include an authorization token
          // Add other headers as needed
        },
      });

      // Handle the response data
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };
  return [formInput, onFormChangeInput, onFormSubmit];
};
