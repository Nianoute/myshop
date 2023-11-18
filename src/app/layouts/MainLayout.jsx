import React from "react";
import NavbarMain from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavbarMain />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
