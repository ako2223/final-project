import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer";

export default function Layout({children}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
