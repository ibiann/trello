import InputTitle from "components/Input/InputTitle";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { starBoard } from "redux/boardSlice";
import "./BoardBar.scss";

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
    if(isEditBoardTitle) {
      editTitleInputRef.current.focus()
    }
  }, [isEditBoardTitle])

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
            <i className="fa-solid fa-pencil"></i>
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
          <i className="fa-solid fa-star stared"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </div>
      <div className="separator"></div>
      <div className="change-workspace navbar-board-btn">Trello Workspaces</div>
      <div className="separator"></div>
      <div className="share-btn navbar-board-btn">
        <i className="fa-solid fa-user-plus"></i>
        Share
      </div>
    </nav>
  );
};

export default BoardBar;
