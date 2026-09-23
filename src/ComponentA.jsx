import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "./store/formSlice";
import './ComponentA.css'

export default function ComponentA() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(formData));
    setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        role: "",
    })
  };

  return (
    <div className="component-a-container">
      <form className="component-a-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <label className="component-a">
          Name:
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="component-a">
          Email:
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="component-a">
          Phone:
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label className="component-a">
          City:
          <input
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <label className="component-a">
          Role:
          <input
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
          />
        </label>
        <button className="component-a-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}
