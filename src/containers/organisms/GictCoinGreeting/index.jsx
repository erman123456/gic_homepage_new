import React from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import Coin from '../../../assets/images/coin.png'


const GictCoinGreeting = () => {
    const {t} = useTranslation()
    return (
        <div className="wrapper mb-5">
            <div className="row">
                <div className="col-12 col-lg-6 mt-5 text-lg-left text-center">
                    <MainTitle title={t("introduction.gictcoin-page.greeting.title")}/>
                    <div className="col p-0 mt-3 text-lg-left text-center">
                        <MainContent content={t("introduction.gictcoin-page.greeting.content")}/>
                    </div>
                </div>
                <div className="col-12 d-none d-lg-block col-lg-5 mt-5 text-right justify-content-center align-items-center">
                    <img src={Coin} alt="COIN" />
                </div>
            </div>
        </div>
    )
}

export default GictCoinGreeting
