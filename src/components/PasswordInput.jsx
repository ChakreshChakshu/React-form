import { useState } from "react";
const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <div>
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        <button
          type="button"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {" "}
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {error && (
        <p id={`${name}-error`} role="alert" className="text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
