import React from 'react'
import useFetchData from '../Components/useFetchData'

export default function About() {
  const { data: users, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users')

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div className='about'>
      <h2>About This Application</h2>
      <table className='details-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.website}</td>
              <td>{person.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
