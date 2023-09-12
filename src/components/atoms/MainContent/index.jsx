import React from 'react'
import { ContentColor } from '../../../config/Design/Color'
import { Lato } from '../../../config/Design/Fonts'
import './MainContent.css'

const MainContent = (props) => {
    const {style,content, onClick} = props
    return (
        <span onClick={onClick} className="main-content" style={Object.assign({},selfStyle.content, style)}>{content ?? "Your content will be here !"}</span>
    )
}

const selfStyle = {
    content : {
        color : ContentColor,
        fontFamily: Lato,
        fontWeight:600
    }
}

export default MainContent
