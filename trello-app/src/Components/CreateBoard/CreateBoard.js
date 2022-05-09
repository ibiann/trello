import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBoard, changeBoard } from '../redux/boardSlice';
import './CreateBoard.scss'

const CreateBoard = ({ isCreateBoard, setIsCreateBoard }) => {
    const backgroundList = useSelector(state => state.board.backgrounds)
    const numBoardInDB = useSelector(state => state.board.boards).length
    const [boardName, setBoardName] = useState('')
    const [boardDescription, setBoardDescription] = useState('')
    const [boardBackground, setBoardBackground] = useState(backgroundList[0])
    const dispatch = useDispatch()

    const createBoardTitleRef = useRef()

    const handleCreateBoard = () => {
        if(boardName) {
            setIsCreateBoard(false)
            const boardId = `board-${numBoardInDB + 1}`
            const newBoard = {
                id: boardId,
                name: boardName,
                background: boardBackground,
                stared: false,
                description: boardDescription,
                columnOrder: [],
                columns: []
            }
            dispatch(createBoard(newBoard))
            dispatch(changeBoard({ boardId }))
        }
    }

    useEffect(() => {
      if(isCreateBoard) {
        createBoardTitleRef.current.focus();
      }
    }, [isCreateBoard])
    return (
        <div className="create-board">
            <div className="create-board-close" onClick={() => setIsCreateBoard(false)}>
                &times;
            </div>
            <div className="create-board-title"> Create Board </div>
            <label>Background </label>
            <ul className="background-list">
                {backgroundList.map((background, index) => (
                    <li className="background-item" key={index} onClick={() => setBoardBackground(background)}>
                        <img src={background} alt="" />
                        {boardBackground === background && <div className="background-item-selected"><i className="fa-solid fa-circle-check"></i></div>}
                    </li>
                ))}
            </ul>

            <label>Board Title <span>*</span></label>
            <input ref={createBoardTitleRef} type="text" value={boardName} onChange={(e) => setBoardName(e.target.value)} className="create-board-input" required />
            <p className="">👋 Board title is required</p>

            <label>Board Description</label>
            <textarea type="text" value={boardDescription} onChange={(e) => setBoardDescription(e.target.value)} className="create-board-input" required />

            <label>Trello Workspaces </label>
            <select className="create-board-workspace">
                <option value="private">Private</option>
                <option value="public">Public</option>
            </select>
            <div className="create-board-note">To have unlimited boards, please upgrade to Pro User.</div>
            <button className="create-board-submit" onClick={handleCreateBoard}>Create</button>
        </div>
    );
}

export default CreateBoard;
