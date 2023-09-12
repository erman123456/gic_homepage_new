import React from 'react'
import Picture from '../../../assets/images/reactangleprofilepicture.png'

const RectanglePicture = (props) => {
    const {style,image} = props
    return (
        <div style={Object.assign(selfStyle.container, style && style.container)}>
            <img style={Object.assign(selfStyle.image, style && style.image)} src={image ?? Picture} alt="Profile"  />
        </div>
    )
}

const selfStyle = {
    container : {
        background:'#fff',
        width: 121,
        height: 121,
        borderRadius:100,
        overflow:'hidden',
        margin:'auto'
    },
    image : {
        width:'100%',
        height:'100%',
        resizeMode : 'contain'
    }
}

export default RectanglePicture
