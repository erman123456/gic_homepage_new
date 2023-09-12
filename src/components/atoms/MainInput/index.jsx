import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'

const MainInput = (props) => {
    const {type, placeholder, error} = props
    const [passwordOpen,setPasswordOpen] = useState(false)
    const [isType,setIsType] = useState(type ?? 'text')

    const openPassword = () => {
        if(!passwordOpen){
            setPasswordOpen(true) 
            setIsType('text')
            return
        }else{
            setPasswordOpen(false)
            setIsType('password')
        }
    }
    return (
        <div className="w-100 d-flex" style={Object.assign({}, selfStyle.container, error && {borderColor:'red'})}>
            <input placeholder={placeholder} style={selfStyle.input} type={isType ?? 'text'} />
            {
                type === "password" &&
                <FontAwesomeIcon onClick={() => {openPassword()}} icon={!passwordOpen ? faEyeSlash : faEye} style={{marginTop:10, color:'#888'}}/>
            }
        </div>
    )
}

const selfStyle = {
    container :{
        height:40,
        background:'#fff',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#BDBDBD',
        borderRadius:4,
        paddingLeft:10,
        paddingRight:10,
    },
    input : {
        width:'95%',
        height:40,
        border:'none',
        background:'none',
        outline:'none',
    }
}

export default MainInput
