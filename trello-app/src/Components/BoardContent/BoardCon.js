// import { Col } from 'antd'
import React from 'react'
import './BoardCon.scss'

import Column from '../Column/Column'

function BoardCon() {  
    return (
    <div className="board-content">
        <Column/>
        <Column/>
        <Column/>
    </div> 
    )
}

export default BoardCon