import { PlusCircleOutlined, UnorderedListOutlined } from '@ant-design/icons'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

import './Column.scss'

import Card from '../Card/Card'
import { mapOrder } from '../../utils/sort'
import { MODAL_CONFIRM } from '../../utils/const'
import Confirm from '../Dialogue/Confirm'
import { Dropdown, Form } from 'react-bootstrap'
import { saveContentColumnTitle, selectAllText } from '../../utils/contentEdit'

function Column(props) {
  // const [hide,setHide] = React.useState(false)
  const { column, onCardDrop, onUpdateColumn } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const toggleShowConfirmBox = () => setShowConfirmBox(!showConfirmBox)
  const [columnTitle, setColumnTitle] = useState('') //string rong
  const handleColumnTitleChange = useCallback((e) => {
    setColumnTitle(e.target.value, [])
  })

  useEffect(() => {
    setColumnTitle(column.title)
  }, [column.title])
  // column thay doi title thi effect nay se chay
  // 0 se chay vo hanF

  const ConfirmModal = (type) => {
    if (type === MODAL_CONFIRM) {
      const newColumn = {
        ...column,
        _destroy: true
      }
      onUpdateColumn(newColumn)
    }
    toggleShowConfirmBox()
  }

  const handleColumnTitleBlur = () => {
    const newColumn = {
      ...column,
      _destroy: true
    }
    onUpdateColumn(newColumn)
  }

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
