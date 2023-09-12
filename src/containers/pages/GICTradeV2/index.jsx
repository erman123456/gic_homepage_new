import React from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import Layout from '../../../components/layouts';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import GicTradeGreeting from '../../organisms/GicTradeGreeting';
import TheBenefit from '../../organisms/TheBenefit';
import TheGameChanger from '../../organisms/TheGameChanger';
import TraderProblem from '../../organisms/TraderProblem';

const GICTradeV2 = ({breadcrumbs}) => {

    const metaContent = `Bergabunglah sebagai trader aktif di GIC Trade, dan gunakan platform forex peer-to-peer terbaik di Indonesia untuk trading & mendapatkan keuntungan.`
    return (
        <Layout breadcrumbs={breadcrumbs} activePage="GICTrade" metaContent={metaContent}>
            <GicTradeGreeting />
            <TraderProblem />
            <TheGameChanger />
            <TheBenefit />
        </Layout>
    )
}

export default withBreadcrumbs(BreadcrumbRoutes)(GICTradeV2)
