import React from "react";
import { Link } from "react-router-dom";

export const users = [
  {
    id: 1,
    name: "Rupa",
    email: "rupa@gmail.com",
    phone: "8976543321",
    city: "Eluru",
    role: "Developer",
  },
  {
    id: 2,
    name: "Pavani",
    email: "pavani@gmail.com",
    phone: "9087654321",
    city: "Vijayawada",
    role: "Designer",
  },
  {
    id: 3,
    name: "Swapna",
    email: "swapna@gmail.com",
    phone: "7890654321",
    city: "Pune",
    role: "Coder",
  },
  {
    id: 4,
    name: "Vamsi",
    email: "vamsi@gmail.com",
    phone: "6789054321",
    city: "Hyderabad",
    role: "Developer",
  },
  {
    id: 5,
    name: "Jyothi",
    email: "jyothi@gmail.com",
    phone: "7689054321",
    city: "Hyderabad",
    role: "SAP Consultant",
  },
  {
    id: 6,
    name: "Rohith",
    email: "rohith@gmail.com",
    phone: "6879065432",
    city: "Chennai",
    role: "QA Engineer",
  },
  {
    id: 7,
    name: "Ashish",
    email: "ashish@gmail.com",
    phone: "6098751234",
    city: "Vijayawada",
    role: "Tester",
  },
  {
    id: 8,
    name: "Raghu",
    email: "raghu@gmail.com",
    phone: "8897665544",
    city: "Hyderabad",
    role: "Engineer",
  },
  {
    id: 9,
    name: "Shashi",
    email: "shashi@gmail.com",
    phone: "6677432510",
    city: "Bengaluru",
    role: "Civil Engineer",
  },
  {
    id: 10,
    name: "Hethwick",
    email: "hethwick@gmail.com",
    phone: "9900887766",
    city: "Salem",
    role: "Developer",
  },
];

export default function UsersList() {
  return (
    <section className="user-list">
      <div className="user-list-heading">
        <div>
          <p className="eyebrow">Directory</p>
          <h1>Meet the team</h1>
        </div>
        <span className="user-count">{users.length} members</span>
      </div>
      <div className="user-grid">
        {users.map((user) => (
          <article className="user-card" key={user.id}>
            <div className="avatar">{user.name.charAt(0)}</div>
            <div className="user-card-content">
              <p className="user-role">{user.role}</p>
              <h2>{user.name}</h2>
              <p>{user.city}</p>
              <p className="user-email">{user.email}</p>
              <Link className="details-link" to={`../${user.id}`}>
                View Details <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
