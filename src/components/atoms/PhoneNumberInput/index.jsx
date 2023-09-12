import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneNumberInput = (props) => {
    const {error,onChange} = props
    return (
        <PhoneInput
            country={'id'}
            onChange={onChange}
            enableSearch
            inputClass="w-100 h-100"
            inputStyle={error && {borderColor:'red', borderWidth:1}}
            buttonStyle={error && {borderColor:'red', borderWidth:1}}
            containerStyle={{height:40, outline:'none'}}
        />
    )
}

export default PhoneNumberInput
