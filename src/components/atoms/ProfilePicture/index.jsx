import React from 'react'
import PP from '../../../assets/images/profilepicture.png'
import { MainColor } from '../../../config/Design/Color'

const ProfilePicture = (props) => {
    const {style,image } = props
    return (
        <div style={Object.assign(selfStyle.container, style && style.container)}>
            <img src={image ?? PP} alt="Profile" style={Object.assign(selfStyle.image, style && style.imageStyle)}/>
        </div>
    )
}

const selfStyle = {
    
    container: {
        width:100,
        height:100,
        borderRadius:'100%',
        background:MainColor,
        overflow:'hidden',
        margin:'auto'
    },
    image: {
        width:'100%',
        height:'100%'
    }
}

export default ProfilePicture
