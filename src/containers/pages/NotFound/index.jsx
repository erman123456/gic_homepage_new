import React from 'react'
import Layout from '../../../components/layouts'
import NotFoundComponent from '../../organisms/NotFound'

const NotFound = () => {
    const metaContent = `Ooppss!! Anda berada dihalaman yang salah`
    return (
        <Layout metaContent={metaContent} activePage="404">
            <NotFoundComponent />
        </Layout>
    )
}

export default NotFound
