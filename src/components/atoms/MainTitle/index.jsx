import React from 'react'
import { MainColor } from '../../../config/Design/Color'
import { Lato } from '../../../config/Design/Fonts'
import './MainTitle.css'

const MainTitle = (props) => {
    const {style,title, onClick} = props
    return (
        <span onClick={onClick} className="main-title" style={Object.assign({}, selfStyle.title, style, onClick && {cursor:'pointer'})}>{title ?? "Your main title will be here !"}</span>
    )
}

const selfStyle = {
    title : {
        color : MainColor,
        fontFamily: Lato,
        fontWeight:600
    }
}



export default MainTitle
