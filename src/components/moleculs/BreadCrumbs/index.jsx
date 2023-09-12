import React from 'react'
import { Roboto } from '../../../config/Design/Fonts'

const BreadCrumbsComponent = (props) => {
    const {breadcrumbs, activePage} = props
    const goHome = () => {
        window.location.href="/"
    }
    return (
        <div className="w-100">
            {breadcrumbs && 
                <div className="wrapper mt-5">
                    {breadcrumbs.map((item,index) => {
                        let label = item.breadcrumb.props.children
                        if(label !== " "){
                            if(label !== activePage)
                                return (
                                    <span onClick={() => {label === 'Home' && goHome()}} style={Object.assign({},selfStyle.breadcrumb, label === 'Home' && {cursor:'pointer'})} key={index}>{label} {index !== breadcrumbs.length-1 ? '/' : ''} </span>
                                )
                            return (
                                <span style={Object.assign(selfStyle.breadcrumbActive)} key={index}>{label} {index !== breadcrumbs.length-1 ? '/' : ''} </span>
                            )
                        }return ""
                    })}
                </div>
            }
        </div>
    )
}

const selfStyle = {
    breadcrumb : {
        fontFamily: Roboto,
        fontWeight:500,
        fontSize:16,
        opacity:0.5
    },
    breadcrumbActive: {
        fontFamily: Roboto,
        fontWeight:500,
        fontSize:16,
        opacity:1
    }
}

export default BreadCrumbsComponent
