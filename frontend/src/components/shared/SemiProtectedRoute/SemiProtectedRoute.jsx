import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SemiProtectedRoute = ({ children}) => {

	const { isAuth , user } = useSelector((state) => state.auth);

	if (isAuth && !user.activated) {
		return <Navigate to="/activate" replace />;
	}
	if (!isAuth){
		return <Navigate to="/" replace/>
	}
	
	return children;
};

export default SemiProtectedRoute;
