import InputTitle from "../Input/InputTitle";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { starBoard } from "../redux/boardSlice";
import "./BoardBar.scss";
import { BiPencil } from "react-icons/bi";
import { StarFilled, StarOutlined, UserAddOutlined } from "@ant-design/icons";

const BoardBar = ({ stared, currentBoard, boardTitle }) => {
  const dispatch = useDispatch();
  const editTitleInputRef = useRef();
  const [isEditBoardTitle, setIsEditBoardTitle] = useState(false);

  const handleStarBoard = () => {
    const editedBoard = {
      stared: !stared,
      boardId: currentBoard,
    };
    console.log(currentBoard);
    dispatch(starBoard(editedBoard));
  };

  useEffect(() => {
    if (isEditBoardTitle) {
      editTitleInputRef.current.focus();
    }
  }, [isEditBoardTitle]);

  return (
    <nav className="navbar-board">
      {!isEditBoardTitle ? (
        <div
          className="board-name"
          style={{ color: "#fff" }}
          onClick={() => setIsEditBoardTitle(true)}
        >
          <span>{boardTitle}</span>
          <div className="board-name-edit">
            <BiPencil />
          </div>
        </div>
      ) : (
        <InputTitle
          type="boardName"
          ref={editTitleInputRef}
          data={boardTitle}
          setEdit={setIsEditBoardTitle}
          currentBoard={currentBoard}
        />
      )}
      <div className="star-btn navbar-board-btn" onClick={handleStarBoard}>
        {stared ? (
          <div className="item-star stared" onClick={handleStarBoard}>
            <StarFilled className="board-item-icon-pressed" />
          </div>
        ) : (
          <div className="item-star" onClick={handleStarBoard}>
            <StarOutlined className="board-item-icon" />
          </div>
        )}
      </div>
      <div className="separator"></div>
      <div className="change-workspace navbar-board-btn">Trello Workspaces</div>
      <div className="separator"></div>
      <div className="share-btn navbar-board-btn">
        <UserAddOutlined className="user-add" />
        Share
      </div>
    </nav>
  );
};

export default BoardBar;
