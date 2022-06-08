import {
  CloseOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { cloneDeep } from "lodash";

import "./Column.scss";

import Card from "../Card/Card";
import { mapOrder } from "../../utils/sort";
import { MODAL_CONFIRM } from "../../utils/const";
import Confirm from "../Dialogue/Remove";
import { Dropdown, Form, Button } from "react-bootstrap";
import { saveContentColumnTitle, selectAllText } from "../../utils/contentEdit";

function Column(props) {
  // const [hide,setHide] = React.useState(false)
  const { column, onCardDrop, onUpdateColumn } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const toggleShowConfirmBox = () => setShowConfirmBox(!showConfirmBox);
  const [columnTitle, setColumnTitle] = useState(""); //string rong
  const handleColumnTitleChange = (e) => {
    setColumnTitle(e.target.value, []);
  };
  const [openNewCard, setOpenNewCard] = useState(false);
  const toggleOpenNewCard = () => setOpenNewCard(!openNewCard);

  const newCardTextplaceRef = useRef(null);

  const [newCardTitle, setNewCardTitle] = useState("");
  const onNewCardTitleChange = (e) => setNewCardTitle(e.target.value);

  useEffect(() => {
    setColumnTitle(column.title);
  }, [column.title]);
  // column thay doi title thi effect nay se chay
  // 0 se chay vo hanF

  useEffect(() => {
    if (newCardTextplaceRef && newCardTextplaceRef.current) {
      newCardTextplaceRef.current.focus();
      newCardTextplaceRef.current.select();
    }
  }, [openNewCard]);

  const ConfirmModal = (type) => {
    if (type === MODAL_CONFIRM) {
      const newColumn = {
        ...column,
        _destroy: true,
      };
      onUpdateColumn(newColumn);
    }
    toggleShowConfirmBox();
  };

  const handleColumnTitleBlur = () => {
    const newColumn = {
      ...column,
      title: columnTitle,
    };
    onUpdateColumn(newColumn);
  };

  const addNewCard = () => {
    if (!newCardTitle) {
      newCardTextplaceRef.current.focus();
      return;
    }

    const newCardAdd = {
      id: Math.random().toString(36).substr(2, 5),
      boardId: column.boardId,
      columnId: column.id,
      title: newCardTitle.trim(),
      // cover: null,
    };
    //console.log(column)
    let newColum = cloneDeep(column);
    newColum.cards.push(newCardAdd);
    newColum.cardOrder.push(newCardAdd.id);

    //console.log(newColum)
    onUpdateColumn(newColum);
    setNewCardTitle("");
    toggleOpenNewCard();
  };

  return (
    // <div className={`column ${hide ? 'hide' : ''}`} draggable={true} onDrop={() => setHide(false)} onDrag={() => setHide(true)} >
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">
          <Form.Control
            size="sm"
            type="text"
            className="content-editable"
            value={columnTitle}
            onChange={handleColumnTitleChange}
            onBlur={handleColumnTitleBlur}
            onKeyDown={saveContentColumnTitle}
            onClick={selectAllText}
            onMouseDown={(e) => e.preventDefault}
            spellCheck="false"
            // onKeyDown={(e) => e.key === 'Enter' && addNewColumn()}
          />
        </div>
        <div className="column-dropdown">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              size="sm"
              className="dropdown-btn"
            >
              <UnorderedListOutlined className="menu-icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* <Dropdown.Item>Action</Dropdown.Item> */}
              <Dropdown.Item onClick={toggleShowConfirmBox}>
                Remove Column
              </Dropdown.Item>
              {/* <Dropdown.Item>Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
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
          nonDragAreaSelector=".card-info-container"
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} cardIndex={index} />
            </Draggable>
          ))}
        </Container>
        {openNewCard && (
          <div className="add-new-card">
            <Form.Control
              size="sm"
              as="textarea"
              rows="3"
              placeholder="Enter a title for this card..."
              className="input-enter-new-card"
              ref={newCardTextplaceRef}
              value={newCardTitle}
              onChange={onNewCardTitleChange}
              onKeyDown={(e) => e.key === "Enter" && addNewCard()}
            />
          </div>
        )}
      </div>
      <footer>
        {openNewCard && (
          <div className="add-new-card-actions">
            <Button
              className="button"
              variant="success"
              size="sm"
              onClick={addNewCard}
            >
              Add Cards
            </Button>
            <span className="cancel-icon" onClick={toggleOpenNewCard}>
              <CloseOutlined />
            </span>
          </div>
        )}
        {!openNewCard && (
          <div className="footer-action" onClick={toggleOpenNewCard}>
            <PlusCircleOutlined className="icon" />{" "}
            <span>Add another card</span>
          </div>
        )}
      </footer>
      <Confirm
        show={showConfirmBox}
        onAction={ConfirmModal}
        title="Remove ???"
        content={`Remove ${column.title}? Bruh just remove it. BRUH BRUH`}
      />
    </div>
  );
}

export default Column;
