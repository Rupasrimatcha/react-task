import React from 'react'

export default function ConditionalRendering() {
    const isLoggedIn=true;
    let msg;
  return (
    <div className='conditional'>
      <h2>Conditional Rendering</h2>
      <div className='operator'>
        <div>
      <h1>Ternary operator</h1>
       { isLoggedIn ? (
       <div>
       <h3>welcome back UI</h3>
       <p>You are successfully LogedIn</p>
       </div>
       ):(
        <div>
       <h3>Please Login UI</h3>
       <p>You need to Login</p>
       </div>
    )}
    </div>
      <hr />
       <div>
      <h1>Logical Operator</h1>
      {isLoggedIn && (
        <h3>Welcome back UI</h3>
      )}
      </div>
      </div>
      <hr />
      {/*<div>
        <h3>if else</h3>
        if(isLoggedIn){
            msg=(
           <div>
            <h3>welcome back UI</h3>
            <p>You are successfully LogedIn</p>
            </div>
        )}else{
            msg=(
            <div>
                <h3>Please Login UI</h3>
       <p>You need to Login</p>
            </div>
        )}
      </div> */}
    </div>
  )
}
