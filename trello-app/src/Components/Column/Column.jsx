import { PlusCircleOutlined, UnorderedListOutlined } from "@ant-design/icons";
import React from "react";
import { Container, Draggable } from "react-smooth-dnd";

import "./Column.scss";

import Card from "../Card/Card";
import { mapOrder } from "../../utils/sort";

function Column(props) {
  // const [hide,setHide] = React.useState(false)
  const { column } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");

  const onCardDrop = (dropResult) => {
    console.log(dropResult);
  };

  return (
    // <div className={`column ${hide ? 'hide' : ''}`} draggable={true} onDrop={() => setHide(false)} onDrag={() => setHide(true)} >
    <div className="column">
      <header className="column-drag-handle">
        {/* <span>Brainstorm</span> */}
        {column.title}
        <UnorderedListOutlined className="column-menu" />
      </header>
      <div className="card-list">
        <Container
          orientation="vertical" //default
          groupName="my-columns"
          onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "card-drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
      </div>
      <footer>
        <div className="footer-action">
          <PlusCircleOutlined className="icon" /> Add another card
        </div>
      </footer>
    </div>
  );
}

export default Column;
