import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Lato } from '../../../config/Design/Fonts'
import { MainColor } from '../../../config/Design/Color'

const ActionForwarder = (props) => {
    const {text,style,onClick} = props
    return (
        <span onClick={onClick} style={Object.assign({},selfStyle.action, style)}>{text ?? 'Your text here'} <FontAwesomeIcon style={{marginLeft:10, fontSize:13}} icon={faArrowRight} /> </span>
    )
}

const selfStyle = {    
    action:{
        fontFamily: Lato,
        color: MainColor,
        fontWeight:600,
        fontSize:16,
        cursor:'pointer'
    }
}

export default ActionForwarder
