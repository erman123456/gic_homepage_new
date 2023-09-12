import React from 'react'
import NoInternetImage from '../../../assets/images/no-internet.png'
import MainContent from '../../../components/atoms/MainContent'
import SectionTitle from '../../../components/atoms/SectionTitle'

const UnderDeveloping = () => {
    return (
        <div className="w-100 mb-5">
            <div className="wrapper">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <img src={NoInternetImage} alt="Not Found" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-4 text-center mt-4">
                        <SectionTitle title={`Uppsss !!!`}/> <br />
                        <MainContent content={"The page is still under developing, we will arrive soon."}/> <br /> <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderDeveloping
