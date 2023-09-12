import React from 'react'
import { DarkTwo } from '../../../config/Design/Color'
import { Lato } from '../../../config/Design/Fonts'

const Label = (props) => {
    const {htmlFor,title, required} = props
    return (
        <label style={Object.assign({},selfStyle.label)} htmlFor={htmlFor}>{title} {required && <span className="text-danger">*</span> }</label>
    )
}


const selfStyle = {
    label : {
        fontSize: 16,
        fontFamily: Lato,
        color:DarkTwo
    }
}

export default Label
