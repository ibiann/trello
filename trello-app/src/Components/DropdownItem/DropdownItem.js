import './DropdownItem.scss'
import { useDispatch } from 'react-redux'
import { starBoard, changeBoard } from '../redux/boardSlice'
import { StarOutlined, StarFilled } from "@ant-design/icons";

const DropdownItem = ({ boardName, boardDesc, boardBg, isStared, boardId, setIsBoardsListChanged, setIsOpenDropList }) => {
    const dispatch = useDispatch()
    const handleStarBoard = () => {
        setIsBoardsListChanged(true)
        const editedBoard = {
            stared: !isStared,
            boardId: boardId,
        }
        dispatch(starBoard(editedBoard))
    }
    const handleChangeBoard = () => {
        setIsOpenDropList(false)
        dispatch(changeBoard({boardId}))
    }

    return (
        <li className="dropdown-item" onClick={handleChangeBoard}>
            <img src={boardBg} alt="" />
            <div className="item-content">
                <div className="item-title"> {boardName} </div>
                <div className="item-text"> {boardDesc} </div>
            </div>
            {isStared ? (
                <div className="item-star stared" onClick={handleStarBoard}>
                    <StarFilled  className="board-item-icon-pressed" />
                </div>
            ) : (
                <div className="item-star" onClick={handleStarBoard}>
                    <StarOutlined className="board-item-icon" />
                </div>
            )}
        </li>
    );
}

export default DropdownItem;
