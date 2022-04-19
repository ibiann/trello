import { UnorderedListOutlined } from '@ant-design/icons'
import React from 'react'
import './Column.scss'

import Card from '../Card/Card'

function Column(props) {
  // const [hide,setHide] = React.useState(false)
  const { column }  = props

  return (
        // <div className={`column ${hide ? 'hide' : ''}`} draggable={true} onDrop={() => setHide(false)} onDrag={() => setHide(true)} >
        <div className="column">
        <header>
              {/* <span>Brainstorm</span> */}
              {column.title}
              <UnorderedListOutlined />
        </header>
          <ul className="card-list">
            <Card/>
            <li className="card-items">
            Green vines attached to the trunk of the tree
            </li>
            <li className="card-items">
            Green vines attached to the trunk of the tree
            </li>
            <li className="card-items">
            Green vines attached to the trunk of the tree
            </li>
            <li className="card-items">
            Green vines attached to the trunk of the tree
            </li>
          </ul>
          <footer>Add another card</footer>
          </div>
  )
}

export default Column