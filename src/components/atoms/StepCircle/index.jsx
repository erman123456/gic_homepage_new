import React from 'react'
import { DarkTwo } from '../../../config/Design/Color'
import { Lato } from '../../../config/Design/Fonts'

const StepCircle = (props) => {
    const {style,title} = props
    return (
        <div style={Object.assign({},selfStyle.container, style)}>
            {title ?? '1'}
        </div>
    )
}

const selfStyle = {
    container : {
        height:'48px',
        width:'48px',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#E0E0E0',
        borderRadius:100,
        textAlign:'center',
        lineHeight:'48px',
        fontFamily:Lato,
        color:DarkTwo,
        fontWeight:600
    }
}

export default StepCircle
