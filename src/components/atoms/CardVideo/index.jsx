import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Banner1 from '../../../assets/images/Banner1.png'
import { MainColor } from '../../../config/Design/Color'

const CardVideo = (props) => {
    const {image, onClick} = props
    return (
        <div className="w-100" style={Object.assign(selfStyles.container)}>
            <img src={image ?? Banner1} alt="VIDEO THUMBNAIL" style={{width:'100%', height:'100%'}}/>
            <div style={Object.assign(selfStyles.triggerBox)}>
                <FontAwesomeIcon onClick={onClick} icon={faPlayCircle} style={Object.assign(selfStyles.playIcon)} />
            </div>
        </div>
    )
}

const selfStyles = {
    container: {
        height:'auto',
        borderRadius:10,
        position:'relative',
        overflow:'hidden',
        background:MainColor,
        justifyContent:'center',
        alignItem:'center',
    },
    triggerBox:{
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        left:0,
        background:'rgba(0,0,0,0.1)',
        textAlign:'center',
        paddingTop:'25%'
    },
    playIcon:{
        fontSize:40,
        cursor:'pointer'
    }
}

export default CardVideo
