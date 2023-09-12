import React from 'react'
import { useTranslation } from 'react-i18next'
import CardGrey from '../../../components/atoms/CardGrey'
import SelectionTitle from '../../../components/atoms/SectionTitle'
import { MainColor } from '../../../config/Design/Color'

const GicValue = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 mt-5 pb-5">
            <div className="wrapper pt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <SelectionTitle title="GIC Value"/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                        <CardGrey noAction style={{title:{color:MainColor}}} title={t("introduction.about-page.gic-value.fair.title")} content={t("introduction.about-page.gic-value.fair.content")}/>
                    </div>
                    <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                        <CardGrey noAction style={{title:{color:MainColor}}} title={t("introduction.about-page.gic-value.collaboration.title")} content={t("introduction.about-page.gic-value.collaboration.content")} />
                    </div>
                    <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                        <CardGrey noAction style={{title:{color:MainColor}}} title={t("introduction.about-page.gic-value.legality.title")} content={t("introduction.about-page.gic-value.legality.content")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GicValue
