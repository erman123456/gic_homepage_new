import React from 'react'
import { useTranslation } from 'react-i18next'
import CardShadow from '../../../components/atoms/CardShadow'
import ContentTitle from '../../../components/atoms/ContentTitle'
import { MainColor } from '../../../config/Design/Color'
import ReactHtmlParser from 'react-html-parser';
import './CareerDetailInformation.css'
import MainContent from '../../../components/atoms/MainContent'

const CareerDetailInformation = () => {
    const {t} = useTranslation()
    const jd = `Gather and evaluate user requirements in collaboration with product managers and engineers
    Illustrate design ideas using storyboards, process flows and sitemaps
    Design graphic user interface elements, like menus, tabs and widgets
    Build page navigation buttons and search fields
    Develop UI mockups and prototypes that clearly illustrate how sites function and look like
    Create original graphic designs (e.g. images, sketches and tables)`
    return (
        <div className="w-100 mb-5">
            <div className="wrapper position-relative">
                <div className="row invisible">
                    <div className="col-12 col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                <CardShadow>
                                    <div className="p-3">
                                        <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.job-description")}  />
                                        <hr />
                                        <MainContent content={ReactHtmlParser(jd)} />
                                    </div>
                                </CardShadow>
                            </div>
                            <div className="col-12 mt-5">
                                <CardShadow>
                                    <div className="p-3">
                                        <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.job-description")}  />
                                        <hr />
                                        <MainContent content={ReactHtmlParser(jd)} />
                                    </div>
                                </CardShadow>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 ">
                        <div className="row">
                            <div className="col-12">
                                <CardShadow>
                                    <div className="p-3">
                                        <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.date")}  />
                                        <hr />
                                        <MainContent content={ReactHtmlParser("Example")} />
                                    </div>
                                </CardShadow>
                            </div>
                            <div className="col-12 mt-5">
                                <CardShadow>
                                    <div className="p-3">
                                        <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.age")}  />
                                        <hr />
                                        <MainContent content={ReactHtmlParser("Example")} />
                                    </div>
                                </CardShadow>
                            </div>
                            <div className="col-12 mt-5">
                                <CardShadow>
                                    <div className="p-3">
                                        <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.location")}  />
                                        <hr />
                                        <MainContent content={ReactHtmlParser("Example")} />
                                    </div>
                                </CardShadow>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="careerdetailinformation-container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <CardShadow>
                                        <div className="p-3">
                                            <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.job-description")}  />
                                            <hr />
                                            <MainContent content={ReactHtmlParser(jd)} />
                                        </div>
                                    </CardShadow>
                                </div>
                                <div className="col-12 mt-5">
                                    <CardShadow>
                                        <div className="p-3">
                                            <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.job-description")}  />
                                            <hr />
                                            <MainContent content={ReactHtmlParser(jd)} />
                                        </div>
                                    </CardShadow>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 ">
                            <div className="row">
                                <div className="col-12 mt-5 mt-lg-0">
                                    <CardShadow>
                                        <div className="p-3">
                                            <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.date")}  />
                                            <hr />
                                            <MainContent content={ReactHtmlParser("Example")} />
                                        </div>
                                    </CardShadow>
                                </div>
                                <div className="col-12 mt-5">
                                    <CardShadow>
                                        <div className="p-3">
                                            <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.age")}  />
                                            <hr />
                                            <MainContent content={ReactHtmlParser("Example")} />
                                        </div>
                                    </CardShadow>
                                </div>
                                <div className="col-12 mt-5">
                                    <CardShadow>
                                        <div className="p-3">
                                            <ContentTitle style={{color:MainColor}} content={t("legacy.career.vacancy.placement")}  />
                                            <hr />
                                            <MainContent content={ReactHtmlParser("Example")} />
                                        </div>
                                    </CardShadow>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                   
            </div>
        </div>
    )
}

export default CareerDetailInformation
