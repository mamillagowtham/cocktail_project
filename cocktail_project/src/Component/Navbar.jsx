import React from 'react'
import { NavLink } from 'react-router-dom'
const StyledDiv = Styled.Div`
background-color:black`
const Navbar = () => {
  return (
    <>
    <nav>
    <div className='nav-center'>Navbar
    <span className='logo'>cocktail</span>
    <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/NewsLetter">NewsLetter</NavLink>
    </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
