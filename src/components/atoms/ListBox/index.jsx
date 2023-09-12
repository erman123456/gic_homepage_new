import React from 'react'
import { Lato } from '../../../config/Design/Fonts'
import './ListBox.css'

const ListBox = (props) => {
    const {style,title, pointer, onClick} = props
    return (
        <div className="w-100 ListBox" style={Object.assign({}, selfStyle.container, pointer && {cursor:"pointer"}, style)} onClick={onClick}>
            {title ?? "Your title here"}
        </div>
    )
}

const selfStyle = {
    container : {
        padding:18,
        borderRadius:6,
        fontSize:20,
        fontFamily:Lato,
        fontWeight:600
    }
}

export default ListBox
