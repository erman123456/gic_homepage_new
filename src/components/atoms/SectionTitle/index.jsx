import React from 'react'
import { DarkOne } from '../../../config/Design/Color'
import { Lato } from '../../../config/Design/Fonts'
import './SectionTitle.css'

const SectionTitle = (props) => {
    const {style,title} = props
    return <span className="section-title" style={Object.assign({},selfStyle.title, style)}>{title ?? "Title"}</span>
    
}

const selfStyle = {
    title : {
        textAlign:'center',
        fontFamily:Lato,
        fontWeight:600,
        color:DarkOne,
    }
}

export default SectionTitle
