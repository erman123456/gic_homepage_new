import React from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import Layout from '../../../components/layouts';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import AboutUsGreeting from '../../organisms/AboutUsGreeting';
import GicValue from '../../organisms/GicValue';
import TheAdvisors from '../../organisms/TheAdvisors';
import TheExecutive from '../../organisms/TheExecutive';
import VissionMission from '../../organisms/VissionMission';

const About = ({breadcrumbs}) => {
    const metaContent = `GIC merupakan perusahaan terbaik, dan terpercaya di Indonesia dengan platform peer-to-peer forex yang revolusioner untuk akses langsung ke Market Maker.`
    return (
        <Layout breadcrumbs={breadcrumbs} activePage="About Us" metaContent={metaContent}>
            <AboutUsGreeting />
            <VissionMission />
            <GicValue />
            <TheExecutive />
            <TheAdvisors />
        </Layout>
    )
}

export default withBreadcrumbs(BreadcrumbRoutes)(About)
