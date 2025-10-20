import React from 'react'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className='flex flex-row gap-2 bg-amber-500 w-screen h-10'>
       <NavLink to={'/login'} >Login</NavLink>
       <NavLink to={'/signup'} >Signup</NavLink>
    </div>
  )
}

export default Navbar