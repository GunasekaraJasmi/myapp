import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    return (

      
      <header className='header'>
            
            <div >
            <Link to='/' className='social-logo'>
              MEDICAL CENTER
              <i class='fas fa-user-md' />
            </Link>
            </div> 

            <nav className='navbar'>
                <ul>
                <Link className='links' to='/'>
                Home
                </Link> 
                
                <Link className='links' to='/login'> 
                Login
                </Link>

                <Link className='links' to='/signup'>
                Sing Up
                </Link>
                </ul>
            </nav>

        </header>
        
    )
}

export default Header
