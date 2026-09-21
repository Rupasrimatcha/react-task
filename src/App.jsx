import React, { createContext, useState } from 'react'
import ConditionalRendering from './Components/ConditionalRendering'
import ListRendering from './Components/ListRendering'
import UseStateHook from './Components/UseStateHook'
import DarkMode from './Components/DarkMode'
import './App.css'

import FormValidation from './Components/FormValidation'
import UseEffectAPI from './Components/UseEffectAPI'
import UseRefHook from './Components/UseRefHook'
import Parent from './Context/parent'
import UseReducerHook from './Components/UseReducerHook'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Users from './Router/Users'
import Contact from './Router/Contact'
import List from './Router/List'
import Profile from './Router/Profile'
import Settings from './Router/Settings'
import UseParamsHook from './Components/UseParamsHook'

const ternary=false;
export const themecontext = createContext()
export default function App() {
  const [theme, setTheme] = useState('light')
  const data = {
    name: 'Rupa',
    email: 'rupa@gmail.com',
    city: 'Eluru',
    role: 'Developer'
  }
  return (
    <div className='app'>
      {ternary && <div>
        
        <UseReducerHook/>
        <div className={theme} style={{border:'2px solid white',padding:'15px',margin:'15px',backgroundColor:'rgb(226, 221, 200)',boxShadow:'0 10px 20px rgba(0,0,0,1)',borderRadius:'10px'}}>
          <h3>Use Context Hook App Component </h3>
          <p>Object data drilling from app component to grand child component by using Use Context Hook</p>
          <themecontext.Provider value={{theme,setTheme,data}}>
            <Parent/>
          </themecontext.Provider>
        
        </div>

        <UseRefHook/>

        <UseEffectAPI/>

        <FormValidation/>
        
        <DarkMode/>
        <UseStateHook/>
        <ConditionalRendering />
        <ListRendering />
        </div>}
      
    <BrowserRouter>
    <nav className='nav'>
      <Link className='nav-links'to={'/'}>Home</Link>
      <Link className='nav-links'to={'/About'}>About</Link>
      <Link className='nav-links'to={'/Users'}>Users</Link>
      <Link className='nav-links'to={'/Contact'}>Contact</Link>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Users' element={<Users/>}>
          <Route path='list' element={<List/>}/>
          <Route path=':id' element={<UseParamsHook/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Route>
       
        <Route path='/Contact' element={<Contact/>}/>
       
    </Routes>
    </BrowserRouter>
    </div>
  )
}


  