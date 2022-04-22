// import { Col } from 'antd'
import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { Container as TrelloApp, Row, Col, Form, Button } from 'react-bootstrap'
import { isEmpty } from 'lodash'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'

import Column from '../Column/Column'
import { mapOrder } from '../../utils/sort'
import { applyDrag } from '../../utils/dragDrop'
import { initialData } from '../../actions/initialData'
import './BoardCon.scss'

function BoardCon() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])
  const [openNewColumn, setOpenNewColumn] = useState(false)

  const newColumnInputRef = useRef(null)

  useEffect(() => {
    const boardFromDB = initialData.boards.find(
      (board) => board.id === 'board-1'
    )
    if (boardFromDB) {
      setBoard(boardFromDB)
      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
    return () => {
      console.log('return')
    }
  }, [])
  if (isEmpty(board)) {
    return (
      <div className="not-found" style={{ padding: '10px' }}>
        Not Found
      </div>
    )
  }
  const onColumnDrop = (dropResult) => {
    console.log(dropResult)
    let newColumns = [...columns]
    newColumns = applyDrag(newColumns, dropResult)

    let newBoard = { ...board }
    newBoard.columnOrder = newColumns.map((a) => a.id)
    newBoard.columns = newColumns
    console.log(newBoard)

    setColumns(newColumns)
    setBoard(newBoard)
  }
  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newColumns = [...columns]
      let currentColumn = newColumns.find((a) => a.id === columnId)
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult)
      currentColumn.cardOrder = currentColumn.cards.map((i) => i.id)
      setColumns(newColumns)
      console.log(columnId)
      console.log(dropResult)
    }
  }

  const toggleOpenNewForm = () => setOpenNewColumn(!openNewColumn)


  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview',
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} onCardDrop={onCardDrop} />
          </Draggable>
        ))}
      </Container>
      <TrelloApp className="TrelloApp-trello-clone-container">
        {!openNewColumn && (
          <Row>
            <Col className="add-new-column" onClick={toggleOpenNewForm}>
              <PlusOutlined className="icon" /> Add another column
            </Col>
          </Row>
        )}

        {openNewColumn && (
          <Row>
            <Col className="enter-new-column">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Small text"
                className="input-enter-new-column"
                ref={newColumnInputRef}
              />
              <Button className="button" variant="success" size="sm">
                Add Column
              </Button>
              <span className="cancel-new-column">
                <CloseOutlined />
              </span>
            </Col>
          </Row>
        )}
      </TrelloApp>
    </div>
  )
}

export default BoardCon
