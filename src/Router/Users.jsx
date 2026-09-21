import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Users() {
  return (
    <div className='users'>
      <h2>Users</h2>
      <p>Choose a nested page to view user information.</p>
      <div className='sub-nav'>
        <Link className='items' to={'list'}>List</Link>
        <Link className='items'to={'profile'}>Profile</Link>
        <Link className='items'to={'settings'}>Settings</Link>

      </div>
      <Outlet/>
    </div>
  )
}
