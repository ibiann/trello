import { forwardRef } from "react";

import "./NavbarItem.scss";

import CreateBoard from "../CreateBoard/CreateBoard";
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
          {title === 'Boards' && <i className="fa-solid fa-table-columns"></i>}
          {title === 'Recent Boards' && <i className="fa-solid fa-clock-rotate-left"></i>}
          {title === 'Stared Boards' && <i className="fa-solid fa-ranking-star"></i>}
          {title}
          {/* <i className="fa-solid fa-chevron-down"></i> */}
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
            <i className="fa-solid fa-wand-magic-sparkles"></i>
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
