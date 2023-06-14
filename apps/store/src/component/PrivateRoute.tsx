
import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
//REDUX
import { useSelector } from "react-redux";
import { RootState } from "../state";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.idToken !== null ? true : false);
  
  console.log("isLoggedIn", isLoggedIn);
  
  useEffect(() => {
    console.log("use effect in Private route=====>", isLoggedIn);
    navigate("/dashboard"); 
    //  (isLoggedIn) ? ()=> navigate("/home"): null;
  }, [isLoggedIn]);

  const location = useLocation();

  return !isLoggedIn ? (
    <Navigate to={"/login"} state={{ from: location }} replace />
  ) : (
    children
  );
};

export default ProtectedRoute;