import React from 'react'
import Layout from '../../../components/layouts'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import BreadCrumbsComponent from '../../../components/moleculs/BreadCrumbs'
import GicSocialTradeHeader from '../../organisms/GicSocialTradeHeader';
import BlogSection from '../../organisms/BlogSection';
import { useTranslation } from 'react-i18next';
import thumbnail1 from '../../../assets/images/thumbnail1-socialtrade-page.png'
import thumbnail2 from '../../../assets/images/thumbnail2-socialtrade-page.png'
import SocialTradeBenefits from '../../organisms/SocialTradeBenefits';
import SocialTradeListMaster from '../../organisms/SocialTradeListMaster';

const SocialTrade = ({breadcrumbs}) => {
    const {t} = useTranslation()
    const blogData = [
        {
            image : thumbnail1,
            titleHighlight : t("product.socialtrade-page.blog.item1.title-highlight"),
            titleDark : t("product.socialtrade-page.blog.item1.title-dark"),
            content : t("product.socialtrade-page.blog.item1.content")
        },
        {
            image : thumbnail2,
            titleHighlight : t("product.socialtrade-page.blog.item2.title-highlight"),
            titleDark : t("product.socialtrade-page.blog.item2.title-dark"),
            content : t("product.socialtrade-page.blog.item2.content")
        }
    ]

    const metaContent = `Social Trade adalah tools Copy Trading Platform terbaik yang bisa membantu Anda tanpa bersusah payah menganalisa market. Stay connect with the Social Master.`
    return (
        <Layout activePage="Social Trade" metaContent={metaContent}>
            <GicSocialTradeHeader />
            <BreadCrumbsComponent breadcrumbs={breadcrumbs} activePage="Social Trade"/>
            <BlogSection data={blogData}/>
            <SocialTradeBenefits />
            <SocialTradeListMaster />
        </Layout>
    )
}

export default withBreadcrumbs(BreadcrumbRoutes)(SocialTrade)
