import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Shimmer from '../../../components/atoms/Shimmer';
import BannerSlider from '../../../components/moleculs/BannerSlider';
import { APIGET } from '../../../config/Axios';
import { DarkTwo } from '../../../config/Design/Color';

const BannerHome = () => {
    const {t} = useTranslation()
    const [data,setData] = useState()
    const getData = async () => {
        let request = await APIGET('/slideshow')
        if(request.status === 200){
            setData(request.data.data)
        }
    }
    useEffect(() => {
        getData()
    }, [])


    const shimmerBanner = () => {
        return (
            <>
                <div className="row justify-content-center mt-5">
                    <div className="col-6">
                        <Shimmer height={40} count={1}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <Shimmer height={40} count={1}/>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-4">
                        <Shimmer height={300} count={1} />
                    </div>
                    <div className="col-4">
                        <Shimmer height={300} count={1} />
                    </div>
                    <div className="col-4">
                        <Shimmer height={300} count={1} />
                    </div>
                </div>
            </>
        )
    }



    return (
        <div className="w-100"style={styles.container}>
                {!data
                ?
                    shimmerBanner()
                :
                    <div className="row">
                        <div className="col-12 text-center " style={styles.boxTitle}>
                            <span style={styles.mainTitle}>{t("home-page.banner.title")}</span> <br />
                            <span style={styles.subTitle}>{t("home-page.banner.content")}</span>
                        </div>
                        <div className="col-12 pb-5 mt-3">
                            {!data
                            ?
                            <p>Loading...</p>
                            :
                            <BannerSlider data={data} />
                            }
                        </div>
                    </div>
                }
        </div>
    )
}

const styles = {
    container : {
        backgroundColor:DarkTwo,
        height:'auto',
        overflow:'hidden'
    },
    boxTitle:{
        marginTop:56
    },
    mainTitle : {
        fontSize : 36,
        color:'#fff'
    },
    subTitle : {
        fontSize : 16,
        color:'#fff'
    },
}

export default BannerHome
