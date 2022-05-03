import { PlusCircleOutlined, UnorderedListOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

import './Column.scss'

import Card from '../Card/Card'
import { mapOrder } from '../../utils/sort'
import { MODAL_CONFIRM } from '../../utils/const'
import Confirm from '../Dialogue/Confirm'
import { Dropdown } from 'react-bootstrap'

function Column(props) {
  // const [hide,setHide] = React.useState(false)
  const { column, onCardDrop } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const toggleShowConfirmBox = () => setShowConfirmBox(!showConfirmBox)

  const ConfirmModal = (type) => {
    if (type === MODAL_CONFIRM) {
      // const
    }
    toggleShowConfirmBox()
  }

  return (
    // <div className={`column ${hide ? 'hide' : ''}`} draggable={true} onDrop={() => setHide(false)} onDrag={() => setHide(true)} >
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">{column.title}</div>
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
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmBox}>
                Another action
              </Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
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
            className: 'card-drop-preview',
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
      <Confirm
        show={showConfirmBox}
        onAction={ConfirmModal}
        title="remove column"
        content={`Remove ${column.title}? Remove soon`}
      />
    </div>
  )
}

export default Column
