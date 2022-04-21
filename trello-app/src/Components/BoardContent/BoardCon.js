// import { Col } from 'antd'
import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { Container as TrelloApp, Row, Col, Form, Button} from 'react-bootstrap'
import { isEmpty } from 'lodash'

import './BoardCon.scss'

import Column from '../Column/Column'

import { mapOrder } from '../../utils/sort'

import { applyDrag } from '../../utils/dragDrop'

import { initialData } from '../../actions/initialData'
import { PlusOutlined } from '@ant-design/icons'



function BoardCon() {  
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState({})


    useEffect(() => {
        const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
        if(boardFromDB) {
            setBoard(boardFromDB)

            // sort column

            // boardFromDB.columns.sort((a, b) => {
            //     return boardFromDB.columnOrder.indexOf(a.id) - boardFromDB.columnOrder.indexOf(b.id) 

            // })
            setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
        }
    }, [])

    if (isEmpty(board)) {
        return <div className="not-found" style={{'padding': '10px'}}>Not Found</div>
    }

    const onColumnDrop = (dropResult) => {
        console.log(dropResult)
        let newColumns = [...columns]
        newColumns = applyDrag(newColumns, dropResult)

        let newBoard = { ...board }
        newBoard.columnOrder = newColumns.map(c => c.id)
        newBoard.columns = newColumns
        console.log(newBoard)
            
        setColumns(newColumns)
        setBoard(newBoard)
    }

    const onCardDrop = (columnId, dropResult) => {
        if(dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            let newColumns = [...columns]

            let currentColumn = newColumns.find(c => c.id === columnId)

            currentColumn.cards = applyDrag(currentColumn.cards, dropResult)
            currentColumn.cardOrder = currentColumn.cards.map(i => i.id)

            setColumns(newColumns)

          console.log(columnId)
          console.log(dropResult)
        }
      }
    
    return (
    <div className="board-content">
         <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          getChildPayload={index => columns[index]}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'column-drop-preview'
          }} 
        >
        {columns.map((column, index) => (
            <Draggable key={index}>
            <Column column={column} onCardDrop={onCardDrop}/>
         </Draggable>
        ))}
        </Container>

        <TrelloApp className="TrelloApp-trello-clone-container">
        <Row>
          <Col className="add-new-column">
          <PlusOutlined className="icon" /> Add another column
          </Col>
        </Row>

          <Row>
            <Col className="enter-new-column">
            <Form.Control 
            size="sm" 
            type="text"
            placeholder="Small text"
            className="input-enter-new-column" />
            <Button className="button" variant="success" size="sm">Add Column</Button>
            </Col>
          </Row>

      </TrelloApp>
    </div> 
    )
}

export default BoardCon