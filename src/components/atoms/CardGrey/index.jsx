import React from 'react'
import GictradeIcon from '../../../assets/images/icon/gictrade-icon.png'
import { DarkFour, DarkTwo, GreyOne } from '../../../config/Design/Color'
import { Lato } from '../../../config/Design/Fonts'
import ActionForwarder from '../ActionForwarder'

const CardGreey = (props) => {
    const {style,onClick, withIcon, title, content, contentCenter, noAction, text} = props
    return (
        <div className="card w-100 pb-3" style={Object.assign({}, selfStyle.container, style && style.container)}>
            <div className="card-header" style={Object.assign({}, selfStyle.header, style && style.header)}>
                <div className="row pl-3 pr-3">
                    { withIcon &&
                        <div className={`col-1  pl-0 ${contentCenter && 'text-center'}`}>                                
                            <img src={withIcon ?? GictradeIcon} alt="Swap Icon" style={Object.assign({}, selfStyle.icon, style && style.icon)} />
                        </div>
                    }
                    <div className={`col-11 pl-0 ${contentCenter && 'text-center'}`}>
                        <span style={Object.assign({}, selfStyle.title, style && style.title, withIcon && {marginLeft:10})}>{title ?? 'Title'}</span>
                    </div>
                </div>
            </div>
            <div className={`card-body pt-0 ${contentCenter && 'text-center'}`}>
                <span style={Object.assign({}, selfStyle.content, style && style.content)}>
                    {content ?? 'Your content will be here !'}
                </span>
            </div>
            {!noAction &&
                <div className="card-footer" style={Object.assign({}, selfStyle.footer, style && style.footer)}>
                    <ActionForwarder text={text} onClick={onClick} />
                </div>
            }
        </div>
    )
}

const selfStyle = {
    container : {
        background: GreyOne,
        border:'none',
        borderRadius:12,
        minHeight:198
    },
    header:{
        border:'none',
        background:'none',
        paddingTop:30
    },
    title: {
        fontFamily: Lato,
        color: DarkTwo,
        fontWeight:600,
        fontSize:20,
    },
    icon: {
        height:24,
        width:24,
    },
    content: {
        fontFamily: Lato,
        color: DarkFour,
        fontWeight:300,
        fontSize:16,
    },
    footer:{
        border:'none',
        background:'none'
    },
}

export default CardGreey
