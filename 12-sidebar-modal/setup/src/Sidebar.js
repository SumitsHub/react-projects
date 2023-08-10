import React from "react";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
      <div className="sidebar-header">
        <img src="https://wallsdesk.com/wp-content/uploads/2016/05/BMW-Logo-PNG.png" alt="" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({id, url, text, icon})=>{
          return <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        })}
      </ul>
      <ul className="social-icons">
        {social.map(({id, url, icon})=>{
          return <li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
