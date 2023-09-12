import React from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import Layout from '../../../components/layouts';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import PrivacyPoliceComponent from '../../organisms/PrivacyPolice';

const PrivacyPolice = ({breadcrumbs}) => {
    const metaContent = `GIC's Privacy Police`
    return (
        <Layout breadcrumbs={breadcrumbs} activePage="Privacy Police" metaContent={metaContent}>
            <PrivacyPoliceComponent />
        </Layout>
    )
}

export default withBreadcrumbs(BreadcrumbRoutes)(PrivacyPolice)
