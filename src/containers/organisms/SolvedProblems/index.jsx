import React from 'react'
import { useTranslation } from 'react-i18next'
import MerryRiana from '../../../assets/images/merry-riana-gictcoin.png'
import ListBox from '../../../components/atoms/ListBox'
import MainTitle from '../../../components/atoms/MainTitle'
import SectionTitle from '../../../components/atoms/SectionTitle'

const SolvedProblems = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 mb-5">
            <div className="wrapper pt-5">
                <div className="row">
                    <div className="col-12 col-lg-5 d-none d-lg-block text-left pt-4">
                        <img src={MerryRiana} alt="Merry Riana" />
                    </div>
                    <div className="col-12 col-lg-7 text-center text-lg-left">
                        <SectionTitle title={t("introduction.gictcoin-page.problems-solved.title")} />
                        <div className="row mt-4">
                            <div className="col-12 col-lg-6">
                                <MainTitle title={t("introduction.gictcoin-page.problems-solved.trader-perspective.title")} style={{fontSize:24}} />

                                <div className="col p-0 mt-3">
                                    <ListBox title={t("introduction.gictcoin-page.problems-solved.trader-perspective.item1")}/>
                                </div>
                                <div className="col p-0 mt-3">
                                    <ListBox title={t("introduction.gictcoin-page.problems-solved.trader-perspective.item2")}/>
                                </div>
                                <div className="col p-0 mt-3">
                                    <ListBox title={t("introduction.gictcoin-page.problems-solved.trader-perspective.item3")}/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                <MainTitle title={t("introduction.gictcoin-page.problems-solved.broker-perspective.title")} style={{fontSize:24}} />

                                <div className="col p-0 mt-3">
                                    <ListBox title={t("introduction.gictcoin-page.problems-solved.broker-perspective.item1")}/>
                                </div>
                                <div className="col p-0 mt-3">
                                    <ListBox title={t("introduction.gictcoin-page.problems-solved.broker-perspective.item2")}/>
                                </div>
                                <div className="col p-0 mt-3">
                                    <ListBox title={t("introduction.gictcoin-page.problems-solved.broker-perspective.item3")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolvedProblems
