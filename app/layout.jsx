"use client";
import "./globals.scss";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
      <footer className="w-auto h-auto px-[80px] mb-[30px] ">
        <Footer />
      </footer>
    </html>
  );
}
