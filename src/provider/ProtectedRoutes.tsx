import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
	console.log("xxxxxxxx");
	// TODO: Use authentication token
	const localStorageToken = localStorage.getItem("token");
	// const localStorageToken = localStorage.getItem("token");
	return !localStorageToken ? 
	<>
	<h1>Navbar Protect</h1>
	<h1>SideBar Protect</h1>
	<Outlet />
	</> 
	: 
	<Navigate to="/login"  replace />;
};

export default ProtectedRoutes;