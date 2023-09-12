import React from 'react'
import { useTranslation } from 'react-i18next'
import { MainColor } from '../../../config/Design/Color'
import CardVideo from '../../atoms/CardVideo'
import MainButtonTransparent from '../../atoms/MainButtonTransparent'
import MainContent from '../../atoms/MainContent'
import MainTitle from '../../atoms/MainTitle'
import SectionTitle from '../../atoms/SectionTitle'

const BlogThumbnail = (props) => {
    const {titleHighlight, titleDark, content,video, image, onClick} = props
    const {t} = useTranslation()
    return (
        <div className="w-100">
            <div className="col-12 mt-2 p-0 d-none d-lg-block">
                <CardVideo onClick={onClick} image={image}/>
            </div>
            <div className="col-12 p-0 mt-3 text-center text-lg-left">
                <MainTitle title={titleHighlight ?? "Active Traders"}/><SectionTitle title={` ${titleDark ?? " Trader"} `}/>
            </div>
            <div className="col-12 p-0 mt-2 text-center text-lg-left">
                <MainContent content={content ?? "Your content will be here !"}/>
            </div>
            {video &&
                <div className="col-12 d-block d-lg-none p-0 mt-3 text-center text-lg-left">
                    <MainButtonTransparent  title={t("global.see-video")} style={{paddingLeft:80, paddingRight:80, color:MainColor}} />
                </div>
            }
        </div>
    )
}

export default BlogThumbnail
