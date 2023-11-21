import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="navbar">
      <div className="classic">
        <div className="left">
          <Link to="/" className="">
            <img src="/Logo.svg" alt="logo" className="navbar__logo" />
          </Link>
        </div>
        <div className="right">
          <img src="/Search.svg" alt="search" className="navbar__search" />
          <img src="/Buy.svg" alt="buy" className="navbar__buy" />
          <div className="navbar__button" onClick={handleToggle}></div>
        </div>
      </div>
      {navbarOpen && (
        <div className="popup">
          <div className="close" onClick={handleToggle}>
            <img src="/Close.svg" alt="close" />
          </div>
          <div className="nav">
            <div>
              <p>Collection</p>
              <p>Nouveautés</p>
              <p>Sweats</p>
              <p>T-Shirts</p>
            </div>
            <div>
              <p>Connectez vous pour profiter de tous vos avantages client !</p>
              <p className="inscription__button">S'inscrire</p>
              <p className="connection__button">Se connecter</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMain;
