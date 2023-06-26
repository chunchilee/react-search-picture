import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/About">關於我</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    </>
  );
};

export default Layout;
