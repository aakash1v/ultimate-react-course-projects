import { Outlet } from "react-router-dom";

import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Logo from "../components/Logo.jsx";
import AppNav from "../components/AppNav.jsx";
import { CitiesProvider } from "../contexts/CitiesContext";
import User from "../components/User.jsx";

function AppLayout() {
  return (
    <CitiesProvider>
      <div className={styles.app}>
        <User />
        <Sidebar>
          <Logo />
          <AppNav />
          <Outlet />
        </Sidebar>
        <Map />
      </div>
    </CitiesProvider>
  );
}

export default AppLayout;
