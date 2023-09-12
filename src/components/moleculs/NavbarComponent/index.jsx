import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useHistory } from 'react-router-dom'
import { DarkTwo, MainColor } from '../../../config/Design/Color'
import MainButton from '../../atoms/MainButton'
import MainLogo from '../../atoms/MainLogo'


const NavbarComponent = ({sticky}) => {
    const { t, i18n } = useTranslation();
    let currentLang = window.localStorage.i18nextLng ?? 'en';
    if(currentLang === 'en-US' || currentLang === 'en'){
        currentLang = 'English'
    }else{
        currentLang = 'Indonesia'
    }
    const [language,setLanguage] = useState(currentLang)
    const history = useHistory()

    const langExchange = (lang) => {
        i18n.changeLanguage(lang);
    }


    function NodeMenu({ label }) {
        return (
            <a className="nav-link" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:DarkTwo}}>
                {label} <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:5, color:DarkTwo, fontSize:12}}  />
            </a>
        );
    }

    function ChildMenu({ label, to, activeOnlyWhenExact, icon }) {
        return (
            <NavLink to={to}>
                <span className="dropdown-item">{label}</span>
            </NavLink>
        );
    }

    function SingleMenu({ label, to, activeOnlyWhenExact, icon }) {
        return (
            <NavLink className="nav-link" to={to}>
                <span style={{color:DarkTwo}}>{label}</span>
            </NavLink>
        );
    }


    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-white ${sticky && "position-fixed w-100"}`} style={{zIndex:8}}>
            <div className="container-fluid ">
                <div className="container-fluid pl-lg-5 pr-lg-5">
                    <a className="navbar-brand" href="/">
                        <MainLogo />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2  mb-lg-0 justify-content-end " style={{width:'120%'}}>
                            <li className="nav-item mr-4">
                                <SingleMenu to="/introduction/about-us" label={t("navbar.introduction.submenu.about")} />
                            </li>
                            <li className="nav-item mr-4">
                                <SingleMenu to="/introduction/gict-coin" label={t("navbar.introduction.submenu.gictcoin")} />
                            </li>
                            {/* <li className="nav-item mr-4 dropdown">
                                <NodeMenu label={t("navbar.introduction.title")}/>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><ChildMenu to="/introduction/about-us" label={t("navbar.introduction.submenu.about")} /></li>
                                    <li><ChildMenu to="/introduction/gict-coin" label={t("navbar.introduction.submenu.gictcoin")} /></li>
                                </ul>
                            </li> */}
                            <li className="nav-item mr-4 dropdown">
                                <a className="nav-link " href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:DarkTwo}}>
                                    Product <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:5, color:DarkTwo, fontSize:12}} />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><ChildMenu to="/products/gic-trade" label="GIC Trade" /></li>
                                    <li><ChildMenu to="/products/social-trade" label="Social Trade" /></li>
                                    <li><ChildMenu to="/products/gic-affiliate" label="Afiliate" /></li>
                                    <li><ChildMenu to="/introduction/about-us" label="GIC Academy" /></li>
                                    <li><ChildMenu to="/introduction/about-us" label="GIC Partner" /></li>
                                    <li><ChildMenu to="/introduction/about-us" label="GIC Care" /></li>
                                </ul>
                            </li>
                            <li className="nav-item mr-4">
                                <a className="nav-link active" aria-current="page" href="/#" style={{color:DarkTwo}}>Jurnal</a>
                            </li>
                            <li className="nav-item mr-4">
                                <SingleMenu to="/support/faq" label="FAQ" />
                            </li>
                            <li className="nav-item d-lg-block d-md-none d-sm-none mr-4">
                            </li>
                            <li className="nav-item d-lg-block d-md-none d-sm-none mr-4">
                            </li>
                            <li className="nav-item d-lg-block d-md-none d-sm-none">
                            </li>
                            <li className="nav-item">
                                <MainButton onClick={() => {history.push('/login')}} style={{width:120, color:MainColor, background:'#fff'}} title="Login"/>
                            </li>
                            <li className="nav-item">
                                <MainButton onClick={() => {history.push('/register')}} style={{width:120}} title="Sign Up"/>
                            </li>
                            <li className="nav-item dropdown  ml-lg-4 pl-lg-2 mt-lg-1 border-start" style={{borderLeft:'solid 2px #ccc', height:'30px', lineHeight:'15px'}}>
                                <a className="nav-link " href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:DarkTwo}}>
                                    {language} <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:5, color:DarkTwo, fontSize:12}}  />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li onClick={() => {langExchange('en'); setLanguage(window.localStorage.i18nextLng === 'en' ? 'English' : 'Indonesia')}}><span className="dropdown-item" >English</span></li>
                                    <li onClick={() => {langExchange('id'); setLanguage(window.localStorage.i18nextLng === 'en' ? 'English' : 'Indonesia')}}><span className="dropdown-item">Indonesia</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavbarComponent
