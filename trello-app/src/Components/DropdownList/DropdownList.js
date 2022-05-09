import DropdownItem from "../DropdownItem/DropdownItem";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import "./DropdownList.scss";

const DropdownList = ({ title, isOpenDropList, setIsOpenDropList }) => {
  const [boardsList, setBoardsList] = useState([])
  const [isBoardsListChanged, setIsBoardsListChanged] = useState(false)

  const boardsListFromDB = useSelector(state => state.board.boards)
  useEffect(() => {
    if (boardsListFromDB) {
      if (title === "Stared Boards") {
        setBoardsList(boardsListFromDB.filter(board => board.stared))
      }
      else if (title === "Boards" || title === "Recent Boards") setBoardsList(boardsListFromDB)
    }
  }, [isBoardsListChanged, title, boardsListFromDB]);

  const handleClose = () => {
    setIsOpenDropList(!isOpenDropList);
  };

  return (
    <div className={`dropdown-container ${title}`}>
      <div className="dropdown-close" onClick={handleClose}>
        &times;
      </div>
      <div className="dropdown-title"> {title} </div>
      {boardsList.length > 0 ? 
        (<ul className="dropdown-list">
            {boardsList.map((board, index) => <DropdownItem key={index} boardName={board.name} boardDesc={board.description} boardBg={board.background} isStared={board.stared} boardId={board.id} setIsBoardsListChanged={setIsBoardsListChanged} setIsOpenDropList={setIsOpenDropList} />)}
        </ul>)
        : <p className="dropdown-empty"> No {title} found!!!</p>
      }
    </div>
  );
};

export default DropdownList;
