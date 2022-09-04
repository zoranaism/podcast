import React from "react";
import Header from "./Header.component";
import Footer from "./Footer/Footer.component";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
