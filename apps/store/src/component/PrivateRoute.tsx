
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
 //REDUX
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state";
const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.idToken !== null ? true : false);
  const location = useLocation();

  console.log("isLoggedIn", isLoggedIn);
  
   return !isLoggedIn ? (
    <Navigate to={"/login"} state={{ from: location }} replace />
  ) : (
    children
  );
};

export default ProtectedRoute;