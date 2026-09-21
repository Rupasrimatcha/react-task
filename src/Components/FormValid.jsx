import React, { useState } from "react";

export default function ConditionalFrom() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    term: false,
  });

  const [error, SetError] = useState("");
  const handlechange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   console.log(formData);

  //   const handlechange2 = (e) => {
  //     const { checked, name } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.password) {
      SetError("all the fields are required");
      return;
    }
    if (!formData.term) {
      SetError("must accept the checkbox");
      return;
    }
    SetError("");
    alert("form is submitted succrssfully");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Conditional form</h2>
        <>{error && <h3 style={{ color: "red" }}>{error}</h3>}</>
        <input
          type="text"
          name="userName"
          value={formData.useName}
          onChange={handlechange}
          placeholder="enter a name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handlechange}
          placeholder="enter a email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handlechange}
          placeholder="enter a password"
        />
        <input
          type="checkbox"
          name="term"
          checked={formData.term}
          onChange={handlechange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}