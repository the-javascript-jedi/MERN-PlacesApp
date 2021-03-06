import React, { useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router-dom";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../../UIElements/BackDrop/BackDrop";
import "./MainNavigation.css";
const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    console.log("close backdrop");
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <BackDrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>

        <h1 className='main-navigation__title'>
          <Link to='/'>YourPlaces</Link>
        </h1>
        <nav>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
