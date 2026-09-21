import React,{useState} from 'react'

export default function DarkMode() {
    const [darkMode,setDarkMode]=useState(false)
  return (
    <div className="DarkMode">
    <div className='card'
    style={{backgroundColor:darkMode?"black":"white",
        color:darkMode?"white":"black",
        padding:'20px',
        textAlign:'center',
        
    }}>
      <button onClick={()=>setDarkMode(!darkMode)}>Switch to {darkMode? "light":"dark"}mode</button>
      <p>This is  {darkMode? "dark":"light"} Mode</p>
    </div>
    </div>
  )
}
