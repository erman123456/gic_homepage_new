import React from 'react'
import SearchIcon from '../../../assets/images/icon/search-icon.png'

const Search = ({
    style,
    onChange,
    placeholder
}) => {
    return (
        <div className="d-flex" style={Object.assign({}, selfStyle.container, style && style.container)}>
            <img src={SearchIcon} alt="Search Icon" style={{width:25, height:25, marginTop:12, marginLeft:15}} />
            <input style={Object.assign({}, selfStyle.input, style && style.input)} type="text" placeholder={placeholder ?? 'Placeholder..'} onChange={onChange} />
        </div>
    )
}

const selfStyle = {
    container : {
        width:'100%',
        background:'#fff',
        height:50,
        borderRadius:100
    },
    input:{
        border:'none',
        width:'80%',
        height:'100%',
        outline: 'none',
        paddingLeft:10,
        paddingRight:10
    }
}

export default Search
