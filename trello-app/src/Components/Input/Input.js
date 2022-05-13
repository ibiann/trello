import { useState, forwardRef } from "react";
import "./Input.scss";

const Input = ({ type, currentBoard }, ref) => {
  const [title, setTitle] = useState("");
  
  const handleSubmit = (e) => {
    console.log(currentBoard);
  }
  
  const handleChange = (e) => {
    setTitle(e.target.value.trim());
  };

  const handleClose = () => {
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
