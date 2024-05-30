import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-layout-content">{children}</div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
