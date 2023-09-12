import { faCheckCircle, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Roboto } from '../../../config/Design/Fonts'

const InputInfo = (props) => {
    const {error,success} = props
    const [hide,setHide] = useState(false)
    if(!hide){
        return (
            <div  className={`w-100 d-flex ${error && 'bg-danger'} ${success && 'bg-success'}`} style={Object.assign({}, selfStyle.container)}>
                {error &&
                    <FontAwesomeIcon icon={faTimesCircle} style={{fontSize:16, marginRight:10}} />
                }
                {success &&
                    <FontAwesomeIcon icon={faCheckCircle} style={{fontSize:16, marginRight:10}} />
                }
                {error ?? success}

                <div style={selfStyle.close} onClick={() => {setHide(true)}}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
        )
    }else{
        return ""
    }
}

const selfStyle = {
    container : {
        padding:10,
        color:'#fff',
        borderRadius:6,
        fontSize:12,
        fontFamily:Roboto,
        position:'relative'
    },
    close: {
        width:30,
        height:30,
        position:'absolute',
        top:5,
        right:5,
        lineHeight:'30px',
        coloe:'#fff',
        textAlign:'center',
        cursor:'pointer'
    }
}

export default InputInfo
