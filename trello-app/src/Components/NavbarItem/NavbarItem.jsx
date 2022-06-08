import { forwardRef } from "react";

import "./NavbarItem.scss";

import CreateBoard from "../CreateBoard/CreateBoard";
import { StarOutlined, TableOutlined } from "@ant-design/icons";
import { BsClock } from 'react-icons/bs'
import { VscWand } from 'react-icons/vsc'
const NavbarItem = ({ title, type, setNavbarItemName, isOpenDropList, setIsOpenDropList, isCreateBoard, setIsCreateBoard }, ref) => {
  
  const handleClickNavbarItem = () => {
    setIsOpenDropList(!isOpenDropList);
    setNavbarItemName(title)
  };
  const handleClickCreateBoard = () => {
    setIsCreateBoard(!isCreateBoard);
  }

  return (
    <div className="navbar-item-wrap" ref={ref}>
      {type === "normal" && (
        <div className="navbar-item" onClick={handleClickNavbarItem}>
          {title === 'Boards' && <TableOutlined className="navbar-icon"/>}
          {title === 'Recent Boards' && <BsClock className="navbar-icon"/> }
          {title === 'Stared Boards' && <StarOutlined className="navbar-icon"/>}
          {title}
          {/* <DownOutlined className="dropdown-list-icons" /> */}
        </div>
      )}
      {/* {isOpenDropList && !isCreateBoard && (
        <DropdownList
          title={title}
          isOpenDropList={isOpenDropList}
          setIsOpenDropList={setIsOpenDropList}
        />
      )} */}

      {type === "button" && (
        <>
          <div className="navbar-item navbar-btn" onClick={handleClickCreateBoard}>
            <VscWand className="item-icon-button"/>
            Create Board
          </div>
          {isCreateBoard && !isOpenDropList && (
            <CreateBoard isCreateBoard={isCreateBoard} setIsCreateBoard={setIsCreateBoard}/>
          )}
        </>
      )}
    </div>
  );
};

export default forwardRef(NavbarItem);
