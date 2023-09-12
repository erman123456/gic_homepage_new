import React from 'react'
import Layout from '../../../components/layouts'
import NoInternet from '../../organisms/NoInternet'

const OfflinePage = () => {
    const metaContent = `Ooppss!! Cek koneksi WiFi atau kuota internet Anda untuk mencoba lagi.`
    return (
        <Layout metaContent={metaContent} activePage="No Internet">
            <NoInternet />
        </Layout>
    )
}

export default OfflinePage
