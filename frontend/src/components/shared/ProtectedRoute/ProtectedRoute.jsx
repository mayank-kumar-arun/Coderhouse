import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute =({children}) =>{

	
	const { isAuth , user} = useSelector((state) => state.auth);
	useEffect(() => {
		if (!isAuth && user==null){
			<Navigate to="/" replace/>
		}
		if (isAuth && user.activated) {
			 <Navigate to="/rooms" replace />;
		}

	},[isAuth , user])
	

	return children;

}

export default ProtectedRoute;