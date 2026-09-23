import React from 'react'
import ComponentA from '../ComponentA'
import ComponentB from '../ComponentB'

export default function Home() {
  return (
    <div>
      <h2>Welcome to the React Router Demo </h2>
      <h3>Home page</h3>
      <p>Use the navigation links to explore each page.</p>
      <ComponentA />
      <ComponentB />
    </div>
  )
}
