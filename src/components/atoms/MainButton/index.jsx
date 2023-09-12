import React from 'react'
import { MainColor } from '../../../config/Design/Color'
import { Roboto } from '../../../config/Design/Fonts'

const MainButton = (props) => {
    const {style,className,onClick} = props
    return (
        <button onClick={onClick} className={`btn ${className}`} style={Object.assign({}, selfStyle, style , {outline:'none'})}>{props.title ?? 'Button Title'}</button>
    )
}

const selfStyle = {
    fontFamily: Roboto,
    backgroundColor : MainColor,
    color:'#fff',
    borderRadius:'6px',
    // paddingLeft:'24px',
    // paddingRight:'24px',
    fontSize:'16px',
    fontWeight:'bold',
    outline : 'none',
    border:0,
}

export default MainButton
