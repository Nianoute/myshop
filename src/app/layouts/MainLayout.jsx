import React from "react";
import NavbarMain from "../components/ui/Navbar";

const MainLayoutT = ({ children }) => {
  return (
    <>
      <NavbarMain />
      <div>{children}</div>
    </>
  );
};

export default MainLayoutT;
