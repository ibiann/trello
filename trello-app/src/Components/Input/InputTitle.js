import "./Input.scss";
import { useState, forwardRef } from "react";
import { useDispatch } from "react-redux"
import { editCardTitle, editBoardName } from "../redux/boardSlice"

const InputTitle = ({ type, data, setEdit, currentBoard, columnId, cardIndex }, ref) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(data)
  const handleSaveTitle = () => {    
    if(type === 'Card') {
      setEdit(false)
      if(title) {
        const cardInfo = {
          title,
          boardId: currentBoard,
          columnId: columnId,
          cardPost: cardIndex
        }
        console.log(title);
        dispatch(editCardTitle(cardInfo))
      }
    }
    if(type === 'boardName') {
      setEdit(false)
      if(title) {
        const boardInfo = {
          name: title,
          boardId: currentBoard,
        }
        dispatch(editBoardName(boardInfo))
      }
    }
  };
  return (
    <div className={`input-title ${type}`}>
      <input
        ref={ref}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value.trim())}
      />
      <button className="save-title-btn" onClick={handleSaveTitle}>
        Save
      </button>
    </div>
  );
};

export default forwardRef(InputTitle);
