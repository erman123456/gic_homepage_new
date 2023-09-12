import React from 'react'
import Layout from '../../../components/layouts'
import BreadCrumbsComponent from '../../../components/moleculs/BreadCrumbs'
import GicFeatureHeader from '../../organisms/GicFeatureHeader'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import BlogSection from '../../organisms/BlogSection';
import GicTradeBenefits from '../../organisms/GicTradeBenefits';
import { useTranslation } from 'react-i18next';
import thumbnail1 from '../../../assets/images/thumbnail1-gictrade-page.png'
import thumbnail2 from '../../../assets/images/thumbnail2-gictrade-page.png'

const GICTrade = ({breadcrumbs}) => {
    const {t} = useTranslation()
    const blogData = [
        {
            image : thumbnail1,
            titleHighlight : t("product.gictrade-page.blog.item1.title-highlight"),
            titleDark : t("product.gictrade-page.blog.item1.title-dark"),
            content : t("product.gictrade-page.blog.item1.content")
        },
        {
            image : thumbnail2,
            titleHighlight : t("product.gictrade-page.blog.item2.title-highlight"),
            titleDark : t("product.gictrade-page.blog.item2.title-dark"),
            content : t("product.gictrade-page.blog.item2.content")
        }
    ]

    const metaContent = `Bergabunglah sebagai trader aktif di GIC Trade, dan gunakan platform forex peer-to-peer terbaik di Indonesia untuk trading & mendapatkan keuntungan.`
    return (
        <Layout activePage="GICTrade" metaContent={metaContent}>
            <GicFeatureHeader />
            <BreadCrumbsComponent breadcrumbs={breadcrumbs} activePage="GICTrade"/>
            <BlogSection data={blogData} />
            <GicTradeBenefits />
        </Layout>
    )
}

export default withBreadcrumbs(BreadcrumbRoutes)(GICTrade)
