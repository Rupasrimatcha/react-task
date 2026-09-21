import React, { useContext } from 'react'
import { themecontext } from '../App'

export default function GrandChild() {
  const { theme, setTheme, data } = useContext(themecontext)
  return (
    <div className='grandchild-card'style={{border: '2px solid white' ,padding:'15px'}}>
      <h5>GrandChild Component</h5>
      
      <button className='grandchilbtn' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <section className='usecontext-card'>
        <h4>User Information</h4>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>City: {data.city}</p>
        <p>Role: {data.role}</p>
      </section>
    </div>
  )
}
 