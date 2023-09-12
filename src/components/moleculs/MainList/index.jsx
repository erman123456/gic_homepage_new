import React from 'react'
import { DarkTwo, MainColor } from '../../../config/Design/Color'
import { Lato, Roboto } from '../../../config/Design/Fonts'
import CheckIcon from '../../atoms/CheckIcon'

const MainList = (props) => {
    const {style, highlightContent, content} = props
    return (
        <div className="row" style={style && style.container}>
            <div className="col-1 ">
                <CheckIcon />
            </div>
            <div className="col-10 pl-3 pl-lg-1" style={selfStyle.content}>
                <span style={selfStyle.contentHighlight}>{highlightContent ?? 'Highlight Text'}</span> {content ?? "Your content will be here !"}
            </div>
        </div>
    )
}


const selfStyle = {
    content: {
        color:DarkTwo,
        fontSize:16,
        fontFamily: Lato,
        fontWeight:600,
    },
    contentHighlight:{
        color:MainColor,
        fontSize:16,
        fontFamily: Roboto,
        fontWeight:800
    }
}




export default MainList
