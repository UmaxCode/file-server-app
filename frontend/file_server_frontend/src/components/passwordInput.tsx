import { useState } from "react";

const PasswordInput = ({
  name,
  value,
  placeholder,
  id,
  onFormChangeInput,
}: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="position-relative">
      <input
        type={`${showPassword ? "text" : "password"}`}
        name={name}
        value={value}
        id={id}
        className="form-control"
        placeholder={placeholder}
        onChange={onFormChangeInput}
      />
      {showPassword ? (
        <i
          onClick={() => setShowPassword(!showPassword)}
          className={`fs-4 bi bi-eye-fill position-absolute top-50 translate-middle`}
          style={{ right: "8px", cursor: "pointer" }}
        ></i>
      ) : (
        <i
          onClick={() => setShowPassword(!showPassword)}
          className={`fs-4 bi bi-eye-slash-fill position-absolute top-50 translate-middle`}
          style={{ right: "8px", cursor: "pointer" }}
        ></i>
      )}
    </div>
  );
};

export default PasswordInput;
