import React, { useContext } from 'react'
import { AuthContext } from '../components/provider/AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    if(loading){
        return <h1>loading</h1>
    }
    if(user){
        return children
    }
  return <Navigate to='/login'></Navigate>
}

export default PrivateRoutes