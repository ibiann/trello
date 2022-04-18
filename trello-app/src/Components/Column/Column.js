import { UnorderedListOutlined } from '@ant-design/icons'
import React from 'react'
import './Column.scss'

function Column() {
  const [hide,setHide] = React.useState(false)
  return (
        <div className={`column ${hide ? 'hide' : ''}`} draggable={true} onDrop={() => setHide(false)} onDrag={() => setHide(true)} >
        <header className="trello-header">
              <span>Brainstorm</span>
              <UnorderedListOutlined className=""/>
        </header>
          <ul>
            <li>
            <img src="https://picsum.photos/200/200" alt='trung-img'/>
            
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
          </ul>
          <footer>Add another card</footer>
          </div>
  )
}

export default Column