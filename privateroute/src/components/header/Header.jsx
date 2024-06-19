import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogout =()=>{
    logOut()
    .then('user logged out succesfully')
    .catch((e)=>console.log(e))
  }
  return (
    <div>

<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      {
              user ? <>
              <li>{user.email}</li>
              <li><a onClick={handleLogout}>signOut</a></li>
              <Link to='/orders'> <li><a>Orders</a></li></Link>
              </>:<>   <details>
          <summary>
            authenticatiion
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <Link to='/login'> <li><a>login</a></li></Link>
           
            <Link to='/signup'> <li><a>signup</a></li></Link>
      
          </ul>
        </details></>
            }
      <li>
        
  
     
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Header