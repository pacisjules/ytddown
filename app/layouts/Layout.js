import React from "react";
import Menus from "../components/Menus";
import Bottomfooter from "../components/Bottomfooter";
import styles from "@/styles/mystyle/App.module.css";

const Layout = ({ children }) => {
  {
    return (
      <div className={styles.main}>
        <Menus />
        {children}
        
      </div>
    );
  }
};

export default Layout;
