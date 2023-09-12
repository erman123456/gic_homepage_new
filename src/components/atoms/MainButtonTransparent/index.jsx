import React from 'react'
import { MainColor } from '../../../config/Design/Color'
import { Roboto } from '../../../config/Design/Fonts'
import './MainButtonTransparent.css'

const MainButtonTransparent = (props) => {
    const {style,hover, onClick} = props
    return (
        <button onClick={onClick} className={`btn ${hover && 'MainButtonTransparent'}`} style={Object.assign({}, selfStyle, style , {outline:'none'})}>{props.title ?? 'Button Title'}</button>
    )
}

const selfStyle = {
    fontFamily: Roboto,
    backgroundColor : 'none',
    borderWidth:1,
    borderColor:MainColor,
    color:'#fff',
    borderRadius:'6px',
    // paddingLeft:'24px',
    // paddingRight:'24px',
    fontSize:'16px',
    fontWeight:'bold',
}

export default MainButtonTransparent
