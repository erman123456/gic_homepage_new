import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { MainColor } from '../../../config/Design/Color'

const TopestLayer = (props) => {
    const {children,style, onClick} = props
    return (
        <div style={Object.assign({}, selfStyle.container, style)}>
            <div onClick={onClick} style={selfStyle.close}>
                <FontAwesomeIcon style={{fontSize:40, color:'#fff'}} icon={faTimes} />
            </div>
            {children}
        </div>
    )
}

const selfStyle = {
    container : {
        width:'100%',
        height:'100vh',
        position:'fixed',
        background:'rgba(0,0,0,0.8)',
        zIndex:9,
        top:0
    },
    close: {
        cursor:'pointer',
        width:50,
        height:50,
        position:'absolute',
        top:20,
        right:20,
        background:MainColor,
        textAlign:'center',
        borderRadius:100,
        lineHeight:'70px'
    }
}

export default TopestLayer
