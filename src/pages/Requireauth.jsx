import React from 'react'
import {Outlet,Navigate,useLocation} from 'react-router-dom'
import {useAuth} from '../Context/Auth'

const Requireauth = () => {
    const {auth}=useAuth()
    const Location =useLocation()
    console.log(auth);
  return (
    <>
    {auth?.email?<Outlet />:<Navigate to='/login' state={{from:Location}} replace />}
    </>
  )
}

export default Requireauth