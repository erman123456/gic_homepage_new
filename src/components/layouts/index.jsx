import React from 'react';
import { Helmet } from "react-helmet";
import logo from '../../assets/images/tab-logo.png';
import BreadCrumbsComponent from '../moleculs/BreadCrumbs';
import Footer from '../moleculs/Footer';
import NavbarComponent from '../moleculs/NavbarComponent';

const Layout = (props) => {
    const sticky = false
    const {children, breadcrumbs, activePage, metaContent} = props
    const canoncial = window.location.href

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{activePage ?? 'GIC Indonesia'} | GIC Indonesia</title>
                <meta name="description" content={metaContent ?? 'GIC Indonesia'} />
                <meta name="twitter:card" content="sumary_large_image"/>
                <link rel="canonical" href={canoncial} />
                <link rel="icon" type="image/png" href={logo} sizes="16x16" />
            </Helmet>
            <NavbarComponent sticky={sticky} />
            {/* {breadcrumbs && 
                <div className="wrapper mt-5">
                    {breadcrumbs.map((item,index) => {
                        // if(item.breadcrumb.props.children !== "Home"){
                            if(item.breadcrumb.props.children !== activePage)
                                return (
                                    <span style={Object.assign(selfStyle.breadcrumb)} key={index}>{item.breadcrumb.props.children} {index !== breadcrumbs.length-1 ? '/' : ''} </span>
                                )
                            return (
                                <span style={Object.assign(selfStyle.breadcrumbActive)} key={index}>{item.breadcrumb.props.children} {index !== breadcrumbs.length-1 ? '/' : ''} </span>
                            )
                        // }return ""
                    })}
                </div>
            } */}
            <BreadCrumbsComponent breadcrumbs={breadcrumbs} activePage={activePage} />
            {sticky &&
                <div style={{height:50}}></div>
            }
            {children}
            <Footer />
        </>
    )
}


export default Layout
