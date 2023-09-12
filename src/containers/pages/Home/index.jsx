import React from 'react';
import Layout from '../../../components/layouts';
import BannerHome from '../../organisms/BannerHome';
import Introduction from '../../organisms/Introduction';
import Licensed from '../../organisms/Licensed';
import MediaPartner from '../../organisms/MediaPartner';
import ProductsHome from '../../organisms/ProductsHome';
import Testimonials from '../../organisms/Testimonials';
import WhyChoose from '../../organisms/WhyChoose';


const Home = () => {
    const metaContent = `GIC adalah perusahaan terbaik,  dan terpercaya di Indonesia yang menawarkan platform peer-to-peer untuk bertransaksi di perdagangan forex, berjangka, dan komoditi.`
    return (
        <Layout metaContent={metaContent}>
            <BannerHome />
            <Introduction style={{marginTop:50, paddingBottom:50}}/>
            <ProductsHome />
            <WhyChoose />
            <Testimonials />
            <MediaPartner />
            <Licensed />
        </Layout>
    )
}

export default Home
