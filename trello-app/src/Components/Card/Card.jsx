import InputTitle from "../Input/InputTitle";
import ViewCard from "../ViewCard/ViewCard";
import { useState, useRef, useEffect } from "react";
import "./Card.scss";
import { BiPencil } from "react-icons/bi";

const Card = (props) => {
  const { boardId, columnId, title, cover } = props.card;
  const cardPost = props.cardPost;
  const columnTitle = props.columnTitle;
  const [isViewCard, setIsViewCard] = useState(false);
  const [isEditCard, setIsEditCard] = useState(false);
  const editCardRef = useRef();

  useEffect(() => {
    if (isEditCard) {
      editCardRef.current.focus();
    }
  }, [isEditCard]);

  return (
    <div className="card-item">
      {!isEditCard ? (
        <>
          {cover && <img src={cover} className="card-cover" alt="card img" />}
          <p onClick={() => setIsViewCard(!isViewCard)}> {title} </p>
          <div
            className="card-edit"
            onClick={() => {
              setIsEditCard(true);
            }}
          >
            <BiPencil />
          </div>
        </>
      ) : (
        <InputTitle
          cardIndex={props.cardIndex}
          type="Card"
          ref={editCardRef}
          data={title}
          setEdit={setIsEditCard}
          cardPost={cardPost}
          currentBoard={boardId}
          columnId={columnId}
        />
      )}
      {isViewCard && (
        <ViewCard
          cardTitle={title}
          columnTitle={columnTitle}
          setIsViewCard={setIsViewCard}
        />
      )}
    </div>
  );
};

export default Card;
