import React from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import { DarkOne } from '../../../config/Design/Color'

const TheGameChanger = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 pb-5" style={selfStyle.container}>
            <div className="wrapper pt-0 pt-lg-5">
                <div className="row justify-content-center pt-5">
                    <div className="col-12 mt-0 mt-lg-5 pt-0 pt-lg-5 text-center">
                        <MainTitle style={{color:'#fff', fontSize:50}} title={t("product.gictrade-page-version2.game-changer.title")} />
                    </div>
                    <div className="col-12 col-lg-7 mt-3 text-center">
                        <MainContent style={{color:'#fff'}} content={t("product.gictrade-page-version2.game-changer.content")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const selfStyle = {
    container : {
        background:DarkOne,
    }
}

export default TheGameChanger
