import React from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'

const MarketSize = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 bg-light pb-5">
            <div className="wrapper">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 text-center text-lg-left">
                        <MainTitle title={t("introduction.gictcoin-page.market-size.forex.title")} />
                        <div className="row mt-3">
                            <div className="col-12 col-lg-6 text-center text-lg-left">
                                <MainContent content={t("introduction.gictcoin-page.market-size.forex.content")} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mt-lg-0 text-center text-lg-left">
                        <MainTitle title={t("introduction.gictcoin-page.market-size.crypto.title")} />
                        <div className="row mt-3">
                            <div className="col-12 col-lg-6 text-center text-lg-left">
                                <MainContent content={t("introduction.gictcoin-page.market-size.crypto.content")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketSize
