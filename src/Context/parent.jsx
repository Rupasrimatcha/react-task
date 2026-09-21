import React from 'react'
import Child from './child'

export default function Parent() {
  return (
    <div className='parent-card' style={{border: '2px solid white',padding:'15px'}}>
      <h5>Parent Component</h5>
      <Child/>
    </div>
  )
}
