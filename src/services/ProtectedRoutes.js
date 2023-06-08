import React from "react";
import { useSelector } from "react-redux";
import {Outlet , Navigate} from 'react-router-dom';

const ProtectedRoutes = () => {
    let Status = useSelector((state)=> state.user.authStatus)
    console.log(Status)
  return (
    <div>{Status === true ? <Outlet/> : <Navigate to="/Login"/>}</div> 
  )
}
export default ProtectedRoutes