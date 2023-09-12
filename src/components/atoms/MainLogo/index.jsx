import React from 'react'
import Logo from '../../../assets/images/logo.png'

const MainLogo = () => {
    return (
        <img title="GIC LOGO" src={Logo} style={Object.assign({}, selfStyle)} alt="GIC LOGO" />
    )
}

const selfStyle = {
    width:106,
    height:40
}


export default MainLogo
