import { useState } from "react";
import React from "react";
import "./AppBar.scss";

import NavbarItem from "../NavbarItem/NavbarItem";
import DropdownList from "../DropdownList/DropdownList";
import logo from "../imgs/Trello_logo.svg";
import { BellOutlined, PlusCircleOutlined } from "@ant-design/icons";

function AppBar() {
  const [isOpenDropList, setIsOpenDropList] = useState(false);
  const [isCreateBoard, setIsCreateBoard] = useState(false);
  const [navbarItemName, setNavbarItemName] = useState("");

  return (
    <nav className="navbar-app">
      <nav className="navbar-left">
        <a className="app-logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        <NavbarItem
          title="Boards"
          type="normal"
          setNavbarItemName={setNavbarItemName}
          isOpenDropList={isOpenDropList}
          setIsOpenDropList={setIsOpenDropList}
        />
        <NavbarItem
          title="Recent Boards"
          type="normal"
          setNavbarItemName={setNavbarItemName}
          isOpenDropList={isOpenDropList}
          setIsOpenDropList={setIsOpenDropList}
        />
        <NavbarItem
          title="Stared Boards"
          type="normal"
          setNavbarItemName={setNavbarItemName}
          isOpenDropList={isOpenDropList}
          setIsOpenDropList={setIsOpenDropList}
        />
        <NavbarItem
          title="Create Board"
          type="button"
          isCreateBoard={isCreateBoard}
          setIsCreateBoard={setIsCreateBoard}
        />
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
        <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search..."
          />
        </div>
        <div className="navbar-notify">
        <BellOutlined className="bell-icon"/>
        </div>
        <div className="navbar-user">
        <PlusCircleOutlined className="user-icon" />
        </div>
      </nav>
    </nav>
  );
}

export default AppBar;
