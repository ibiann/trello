// import { Col } from 'antd'
import React, { useState, useEffect, useRef, useCallback } from 'react'
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

  const [newColumnTitle, setNewColumnTitle] = useState('')
  const onNewTitleChange = useCallback(
    (e) => setNewColumnTitle(e.target.value),
    []
  )

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

  useEffect(() => {
    if (newColumnInputRef && newColumnInputRef.current) {
      newColumnInputRef.current.focus()
      newColumnInputRef.current.select()
    }
  }, [openNewColumn])

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
    newBoard.columnOrder = newColumns.map((c) => c.id)
    newBoard.columns = newColumns
    console.log(newBoard)

    setColumns(newColumns)
    setBoard(newBoard)
    setNewColumnTitle('')
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

  const toggleOpenNewColumn = () => setOpenNewColumn(!openNewColumn)

  const addNewColumn = () => {
    if (!newColumnTitle) {
      newColumnInputRef.current.focus()
      return
    }
    const newColumnAdd = {
      id: Math.random().toString(36).substr(3, 5),
      boardID: board.id,
      title: newColumnTitle.trim(),
      cardOrder: [],
      cards: [],
    }

    let newColumns = [...columns]
    newColumns.push(newColumnAdd)

    let newBoard = { ...board }
    newBoard.columnOrder = newColumns.map((c) => c.id)
    newBoard.columns = newColumns
    console.log(newBoard)

    setColumns(newColumns)
    setBoard(newBoard)
  }

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
            <Col className="add-new-column" onClick={toggleOpenNewColumn}>
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
                value={newColumnTitle}
                onChange={onNewTitleChange}
                onKeyDown={(e) => e.key === 'Enter' && addNewColumn()}
              />
              <Button
                className="button"
                variant="success"
                size="sm"
                onClick={addNewColumn}
              >
                Add Column
              </Button>
              <span className="cancel-new-column" onClick={toggleOpenNewColumn}>
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
