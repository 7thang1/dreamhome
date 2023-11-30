"use client";
import "./globals.scss";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenExpiredAt, setTokenExpiredAt] = useState(null);
  useEffect(() => {
    const authToken = Cookies.get("accessToken")
    if (authToken){
      const decodeToken = jwtDecode(authToken);
      const exp = decodeToken.exp;
      const currentTime = Date.now()/1000;
      if( exp > currentTime){
        setIsLoggedIn(true)
        setTokenExpiredAt(exp * 1000);
      
       
        
      
    }
  }},[])
  useEffect(() => {
    const now = Date.now();

    if(tokenExpiredAt && tokenExpiredAt < now) {
      setIsLoggedIn(false);
      Cookies.remove("accessToken");
      localStorage.removeItem("token");
      alert('Phiên đăng nhập hết hạn');
    }

  }, [tokenExpiredAt]);
  useEffect(() => {

    const token = Cookies.get('accessToken');
  
    if (token) {
      const decoded = jwtDecode(token);
  
      setTokenExpiredAt(decoded.exp * 1000); 
  
    }
  
  }, [Cookies.get('accessToken')])
  return (
    <html lang="en">
      <head>
        <title>Dream Home</title>
        <meta
          name="viewport"
          content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <NavBar isLoggedIn={isLoggedIn} />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
