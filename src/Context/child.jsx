import React from 'react'
import GrandChild from './grandChild'

export default function Child() {
  return (
    <div className='child-card'style={{border: '2px solid white',padding:'15px'}}>
      <h5>Child Component</h5>
      <GrandChild/>
    </div>
  )
}
