import React, { lazy } from "react";

const LoginPage = lazy(() => import("../Components/Login"))
const SignupPage = lazy(() => import("../Components/SignUp"))
const CreatCompany = lazy(() => import("../Components/CreateCompany"))

const PublicRoutes = [
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/createform", element: <CreatCompany /> }
];

export default PublicRoutes;