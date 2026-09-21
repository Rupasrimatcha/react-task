import React, { useState } from "react";


export default function FormValidation() {
  // Store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
  });

  
  const [errors, setErrors] = useState({});

  
  const [success, setSuccess] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  
    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    // First Name
    if (formData.firstName === "") {
      newErrors.firstName = "First Name is required";
    }

    // Last Name
    if (formData.lastName === "") {
      newErrors.lastName = "Last Name is required";
    }

    // Email
    if (formData.email=== "") {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Mobile
    if (formData.mobile === "") {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must contain 10 digits";
    }

    // Password
    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm Password
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Date of Birth
    if (formData.dob === "") {
      newErrors.dob = "Date of birth is required";
    }

    // Gender
    if (formData.gender === "") {
      newErrors.gender = "Please select your gender";
    }

    // Address
    if (formData.address === "") {
      newErrors.address = "Address is required";
    }

    // City
    if (formData.city === "") {
      newErrors.city = "City is required";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    // If errors exist
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    
    console.log("Submitted Data:", formData);

    setErrors({});
    setSuccess(alert("Registration successful!"));

    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      address: "",
      city: ""
    });
  };

  return (
    <div className="form-container">
      <form className="form"onSubmit={handleSubmit}>

        <h2>Registration Form</h2>

            {success && <p className="success">{success}</p>}

        <table>
            <tbody>
        <tr>
          <td><label>First Name: </label></td>
        <td>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          /></td>

          {errors.firstName && (
            <td style={{color:'red'}}>{errors.firstName}</td>
          )}
        </tr>

      
         <tr>
         <td> <label>Last Name: </label></td>
          <td>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          /></td>

          {errors.lastName && (
            <td style={{color:'red'}}>{errors.lastName}</td>
          )}
        </tr>

       
         <tr>
          <td><label>Email: </label></td>
          <td>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          /></td>

          {errors.email && (
            <td style={{color:'red'}}>{errors.email}</td>
          )}
        </tr>

      
         <tr>
          <td><label>Mobile Number: </label></td>
          <td>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter 10 digit mobile number"
          /></td>

          {errors.mobile && (
            <td style={{color:'red'}}>{errors.mobile}</td>
          )}
        </tr>

        
         <tr>
          <td><label>Password: </label></td>
          <td>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
          /></td>

          {errors.password && (
            <td style={{color:'red'}}>{errors.password}</td>
          )}
        </tr>

       
       <tr>
         <td> <label>Confirm Password: </label></td>
          <td>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          /></td>

          {errors.confirmPassword && (
            <td style={{color:'red'}}>{errors.confirmPassword}</td>
          )}
        </tr>

       
         <tr>
          <td><label>Date of Birth: </label></td>
          <td>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          /></td>

          {errors.dob && (
            <td style={{color:'red'}}>{errors.dob}</td>
          )}
        </tr>

        
         <tr>
         <td> <label>Gender: </label></td>

          <td>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />
              Other
            </label>
          </td>

          {errors.gender && (
            <td style={{color:'red'}}>{errors.gender}</td>
          )}
        </tr>

         <tr>
         <td> <label>Address: </label></td>
          <td>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          ></textarea></td>

          {errors.address && (
            <td style={{color:'red'}}>{errors.address}</td>
          )}
        </tr>

       
         <tr>
         <td> <label>City: </label></td>
          <td>
        <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
          /></td>

          {errors.city && (
            <td style={{color:'red'}}>{errors.city}</td>
          )}
        </tr>  
        <tr>
            <td></td>
            <td>   
                <button type="submit"> Submit</button>
            </td>
        </tr>
        </tbody>
        </table>

      </form>
    </div>
  );
}
