import React, { useEffect,useReducer } from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  password: "",
  confirmpassword: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
};

const initialErrors = {};

function formReducer(state, action) {
  if (action.type === "reset") {
    return initialState;
  }

  return {
    ...state,
    [action.field]: action.value,
  };
}

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = React.useState(initialErrors);

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
    setErrors((currentErrors) => ({ ...currentErrors, [e.target.name]: "" }));
  }

  function validateForm() {
    const nextErrors = {};
    const requiredFields = {
      firstname: "First name is required",
      lastname: "Last name is required",
      email: "Email is required",
      phonenumber: "Phone number is required",
      password: "Password is required",
      confirmpassword: "Confirm password is required",
      dob: "Date of birth is required",
      gender: "Please select a gender",
      address: "Address is required",
      city: "City is required",
    };

    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!state[field].trim()) nextErrors[field] = message;
    });

    if (state.email && !/^\S+@\S+\.\S+$/.test(state.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (state.phonenumber && !/^\d{10}$/.test(state.phonenumber)) {
      nextErrors.phonenumber = "Enter a 10-digit phone number";
    }
    if (state.password && state.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters";
    }
    if (state.password !== state.confirmpassword) {
      nextErrors.confirmpassword = "Passwords do not match";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully");
    }
  }

  function handleReset() {
    dispatch({ type: "reset" });
    setErrors(initialErrors);
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        value={state.firstname}
        name="firstname"
        placeholder="Enter first name"
        onChange={handleChange}
      />
      {errors.firstname && <small className="error">{errors.firstname}</small>}
      <input
        type="text"
        value={state.lastname}
        name="lastname"
        placeholder="Enter last name"
        onChange={handleChange}
      />
      {errors.lastname && <small className="error">{errors.lastname}</small>}
      <input
        type="email"
        value={state.email}
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
      />
      {errors.email && <small className="error">{errors.email}</small>}
      <input
        type="tel"
        value={state.phonenumber}
        name="phonenumber"
        placeholder="Enter phone number"
        onChange={handleChange}
      />
      {errors.phonenumber && <small className="error">{errors.phonenumber}</small>}
      <input
        type="password"
        value={state.password}
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      {errors.password && <small className="error">{errors.password}</small>}
      <input
        type="password"
        value={state.confirmpassword}
        name="confirmpassword"
        placeholder="Confirm password"
        onChange={handleChange}
      />
      {errors.confirmpassword && <small className="error">{errors.confirmpassword}</small>}
      <input type="date" value={state.dob} name="dob" onChange={handleChange} />
      {errors.dob && <small className="error">{errors.dob}</small>}
      <label>
        <input type="radio" name="gender" value="Female" checked={state.gender === "Female"} onChange={handleChange} />
        Female
      </label>
      <label>
        <input type="radio" name="gender" value="Male" checked={state.gender === "Male"} onChange={handleChange} />
        Male
      </label>
      {errors.gender && <small className="error">{errors.gender}</small>}
      <textarea
        value={state.address}
        name="address"
        placeholder="Enter address"
        onChange={handleChange}
      />
      {errors.address && <small className="error">{errors.address}</small>}
      <input
        type="text"
        value={state.city}
        name="city"
        placeholder="Enter city"
        onChange={handleChange}
      />
      {errors.city && <small className="error">{errors.city}</small>}
      <div className="form-actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
}
