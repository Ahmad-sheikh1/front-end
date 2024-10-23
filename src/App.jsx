import Navbar from "./Components/Navbar";
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import AppRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { Verify_Token_Query } from "./GraphQl/Query";
import { useQuery } from "@apollo/client";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { UserData } from "./store/Slices/UserData";



function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(Cookies.get('token') || null);
  const Userdata = useSelector((state) => state.UserData.data)
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(isLoggedIn);


  useEffect(() => {
    if (Userdata) {
      setisLoggedIn(true);
      navigate("/app/dashboard");
    }
  }, [Userdata, navigate]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { data, error, loading, refetch } = useQuery(Verify_Token_Query, {
    variables: { token },
    skip: !token,
  });


  useEffect(() => {
    if (token && !loading) {
      refetch();
    }
    if (error) {
      console.error("Error verifying token:", error);
    }
    if (data) {
      // console.log("Verification response:", data);
      dispatch(UserData(data.VerifyToken.user))
    }

  }, [token, data, error, refetch, loading])

  const shouldShowNavbar = AppRoutes.some(
    (route) => location.pathname.startsWith(`/app`)
  );


  return (
    <Router>
      {shouldShowNavbar && <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Private Routes */}
          {AppRoutes.map((route, index) => (
            <Route
              key={index}
              path={`/app${route.path}`}
              element={route.element}
            />
          ))}
          {/* Public Routes */}
          {PublicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="*" element={<Navigate to="/app/dashboard" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
