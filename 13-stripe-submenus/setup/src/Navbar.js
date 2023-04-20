import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openSidebar } = useGlobalContext();
  const showSubmenu = (e) =>{
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right + tempBtn.left)/2;
    const bottom = tempBtn.bottom - 3;
    console.log('over');
    openSubmenu(page, {center, bottom});
  }

  const handleMouseOver = (e)=>{
    if(!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }

  return (
    <nav className="nav" onMouseOver={handleMouseOver}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={showSubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={showSubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={showSubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
