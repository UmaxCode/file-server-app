import { useState } from "react";

export const useFormBindingHook = (initialFormInput) => {
  const [formInput, setFormInput] = useState(initialFormInput);

  const onFormChangeInput = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };
  return [formInput, onFormChangeInput];
};
