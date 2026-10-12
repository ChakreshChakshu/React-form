import { useState } from "react";

import Checkbox from "./components/Checkbox";
import SubmitButton from "./components/SubmitButton";
import PasswordInput from "./components/PasswordInput";
import SuccessMessage from "./components/SuccessMessage";
import FormInput from "./components/FormInput";

const App = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState({});
  const [submitted, isSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    const updatedValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setError((prev) => {
      const updatedError = {
        ...prev,
        [name]: "",
      };

      if (name === "password" && prev.confirmPassword) {
        updatedError.confirmPassword =
          updatedValue !== formData.confirmPassword
            ? "Passwords do not match"
            : "";
      }

      return updatedError;
    });
  };

  const validationForm=()=>{
    const newErrors={}

    if(!formData.name.trim()){
      newErrors.name="Name is required"
    }else if(formData.name.trim().length<2){
      newErrors.name="Name must be atleast 3 characters"
    }

    if(!formData.email.trim()){
      newErrors.email="Email is Required"
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())){

      newErrors.email="Enter a valid email"
    }

    if(!formData.phone.trim()){
      newErrors.phone="phone is required"
    }

    if (!formData.password){
      newErrors.password="password is required"
    }else if(formData.password.length<8){
      newErrors.password="password must contain atleast 8 characters"
    }


         if (!formData.confirmPassword){
      newErrors.confirmPassword="please confirm your password"
    }else if(formData.confirmPassword!==formData.password){
      newErrors.confirmPassword="passwords do not match"
    }
    
if(!formData.terms){
  newErrors.terms="You must accpet terms and conditions"
}
    
return newErrors

  }


  const handleSubmit=(event)=>{

    event.preventDefault()

    const validationErrors=validationForm();

    setError(validationErrors)

    if(Object.keys(validationErrors).length>0){
      isSubmitted(false)
      return
    }

    isSubmitted(true)



  }

  const handleReset=()=>{
    setFormData(initialFormData)
    setError({})
    isSubmitted(false)

  }

  if(submitted){
    return(
      <main>
        <SuccessMessage/>
      </main>
    )
  }





  return (
<main>
<form onSubmit={handleSubmit} noValidate >
  <FormInput
  label="Full name"
  name="name"
  type="text"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your full name"
  error={error.name}
  />
   <FormInput
  label="Email"
  name="email"
  type="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="enter your email"
  error={error.email}
  />
   <FormInput
  label="Phone Number"
  name="phone"
  type="tel"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+91 1234567890"
  error={error.phone}
  />

  <PasswordInput
  label="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Minimum 8 characters"
  error={error.password}
  />


  <PasswordInput
  label="Confirm Password"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="Enter your password again"
  error={error.confirmPassword}
  />

  <Checkbox
  checked={formData.terms}
  onChange={handleChange}
  error={error.terms}

  />

<SubmitButton
text="Create Account"
/>

<button
type="button"
onClick={handleReset}


> Clear Form</button>






</form>


</main>
  )
};

export default App;
