import { useState, forwardRef } from "react";
import { useDispatch } from "react-redux"
import { createColumn, addCard } from '../redux/boardSlice'
import "./Input.scss";

const Input = ({ setIsAddCard, type, setIsAddColumn, currentBoard, numColumns, columnPost }, ref) => {
  const [title, setTitle] = useState("");
  const dispatch =useDispatch()
  
  const handleSubmit = (e) => {
    console.log(currentBoard);
    if(type === 'Add Card') {
        setIsAddCard(false);
        if(title) {
            const newCard = {
                id: "card-", 
                boardId: currentBoard, 
                columnId: `column-${columnPost+1}`, 
                title: title, 
                cover: null 
            }
            dispatch(addCard(newCard))
        }
    }
    if(type === 'Add Column') {
        setIsAddColumn(false);
        if(title) {
            const newColumn = {
                id: `column-${numColumns+1}`,
                boardId: currentBoard,
                title: title,
                cardOrder: [],
                cards: []
            }
            dispatch(createColumn(newColumn))
        }
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value.trim());
  };
  const handleClose = () => {
    if(type === 'Add Card') {
        setIsAddCard(false);
    }    
    if(type === 'Add Column') {
        setIsAddColumn(false);
    }
  }
  return (
    <div className="edit-card">
      <input
        ref={ref}
        type="text"
        placeholder="Enter title..."
        value={title}
        onChange={handleChange}
      ></input>
      <div className="edit-card-btn">
        <button onClick={handleSubmit}> {type} </button>
        <span className="edit-close" onClick={handleClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default forwardRef(Input);
