import { useState } from 'react'
import React from "react";
import "./AppBar.scss";
import NavbarItem from "../NavbarItem/NavbarItem";
import DropdownList from "../DropdownList/DropdownList";

function AppBar() {
  const [isOpenDropList, setIsOpenDropList] = useState(false);
  const [isCreateBoard, setIsCreateBoard] = useState(false);
  const [navbarItemName, setNavbarItemName] = useState('')
  
  return (
    <nav className="navbar-app">
      <nav className="navbar-left">
        <a className="app-logo" href="/">
          {/* <img src={} alt="" /> */}
        </a>
        <NavbarItem title="Boards" type="normal" setNavbarItemName={setNavbarItemName} isOpenDropList={isOpenDropList} setIsOpenDropList={setIsOpenDropList}  />
        <NavbarItem title="Recent Boards" type="normal" setNavbarItemName={setNavbarItemName} isOpenDropList={isOpenDropList} setIsOpenDropList={setIsOpenDropList}  />
        <NavbarItem title="Stared Boards" type="normal" setNavbarItemName={setNavbarItemName} isOpenDropList={isOpenDropList} setIsOpenDropList={setIsOpenDropList}  />
        <NavbarItem title="Create Board" type="button" isCreateBoard={isCreateBoard} setIsCreateBoard={setIsCreateBoard} />
        {isOpenDropList && !isCreateBoard && (
          <DropdownList
            title={navbarItemName}
            isOpenDropList={isOpenDropList}
            setIsOpenDropList={setIsOpenDropList}
          />
        )}
      </nav>
      <nav className="navbar-right">
        <div className="navbar-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" className="navbar-search-input" placeholder="Search..." />
        </div>
        <div className="navbar-notify">
          <i className="fa-regular fa-bell"></i>
        </div>
        <div className="navbar-user"></div>
      </nav>
    </nav>
  )
};

export default AppBar;
