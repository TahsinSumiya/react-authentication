import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 mx-4">
      <Link to='/login' className='mx-4'><a>Login</a></Link>
      <Link  to='/register'><a>register</a></Link>
    </ul>
  </div>
</div>
    </>
  )
}

export default Header