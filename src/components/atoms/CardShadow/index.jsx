import React from 'react'
import './CardShadow.css'

const CardShadow = ({
    children,
    className,
    style,
    boldShadow
}) => {
    return (
        <div className={`cardshadow-container ${className} ${!boldShadow ? "cardshadow-smoothshadow" : "cardshadow-boldshadow"}`} style={style}>
            {children}
        </div>
    )
}

export default CardShadow
