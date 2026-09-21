import React from "react";
import { useParams, Link } from "react-router-dom";
import { users } from "../Router/List";

export default function UseParamsHook() {
  const { id } = useParams();
  const user = users.find((person) => person.id === Number(id));

  if (!user) {
    return (
      <div className="user-details">
        <h1>User Details</h1>
        <div className="details-card invalid-user">
          <h2>User not found</h2>
          <p>The requested user ID is invalid or unavailable.</p>
          <Link to="/Users/list" className="back-button">
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="user-details">
      <h1>User Details</h1>

      <div className="details-card">
        <h2>{user.name}</h2>

        <table className="details-table">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{user.city}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{user.role}</td>
            </tr>
          </tbody>
        </table>

        <Link to="/Users/list" className="back-button">
           Back to Users
        </Link>
      </div>
    </div>
  );
}
