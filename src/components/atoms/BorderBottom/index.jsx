import React from 'react'

const BorderBottom = (props) => {
    const {style} = props
    return (
        <div className="w-100" style={Object.assign(selfStyle.container, style && style.container)}>

        </div>
    )
}

const selfStyle = {
    container : {
        height:1,
        backgroundColor:'#ddd'
    }
}

export default BorderBottom
