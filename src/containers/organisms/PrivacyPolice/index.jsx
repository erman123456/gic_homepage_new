import React from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import SectionTitle from '../../../components/atoms/SectionTitle'
import ReactHtmlParser from 'react-html-parser';

const PrivacyPoliceComponent = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 mb-5">
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title={t("legacy.privacy-police-page.header.title")} /> <br />
                        <MainContent style={{fontSize:24}} content={t("legacy.privacy-police-page.header.content")} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 mt-4 text-justify">
                        <div>
                            <p>
                                <span >
                                     <MainTitle title={t("legacy.privacy-police-page.item1.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="bg-danger">
                                <div className="card border-0">
                                    <div className="card-body p-0 pl-4">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.privacy-police-page.item1.content")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 mt-4 text-justify">
                        <div>
                            <p>
                                <span >
                                     <MainTitle title={t("legacy.privacy-police-page.item2.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="bg-danger">
                                <div className="card border-0">
                                    <div className="card-body p-0 pl-4">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.privacy-police-page.item2.content"))} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 mt-4 text-justify">
                        <div>
                            <p>
                                <span >
                                     <MainTitle title={t("legacy.privacy-police-page.item3.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="bg-danger">
                                <div className="card border-0">
                                    <div className="card-body p-0 pl-4">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.privacy-police-page.item3.content"))} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 mt-4 text-justify">
                        <div>
                            <p>
                                <span >
                                     <MainTitle title={t("legacy.privacy-police-page.item4.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="bg-danger">
                                <div className="card border-0">
                                    <div className="card-body p-0 pl-4">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.privacy-police-page.item4.content"))} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 mt-4 text-justify">
                        <div>
                            <p>
                                <span >
                                     <MainTitle title={t("legacy.privacy-police-page.item5.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="bg-danger">
                                <div className="card border-0">
                                    <div className="card-body p-0 pl-4">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.privacy-police-page.item5.content"))} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 mt-4 text-justify">
                        <div>
                            <p>
                                <span >
                                     <MainTitle title={t("legacy.privacy-police-page.item6.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="bg-danger">
                                <div className="card border-0">
                                    <div className="card-body p-0 pl-4">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.privacy-police-page.item6.content"))} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 mt-4 text-justify">
                        <div>
                            <p>
                                <span >
                                     <MainTitle title={t("legacy.privacy-police-page.item7.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="bg-danger">
                                <div className="card border-0">
                                    <div className="card-body p-0 pl-4">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.privacy-police-page.item7.content"))} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPoliceComponent
