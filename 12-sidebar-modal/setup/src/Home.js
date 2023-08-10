import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const {openModal, openSidebar, isSidebarOpen} = useGlobalContext();

  return (
    <main>
     {!isSidebarOpen && <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>}
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  );
};

export default Home;
