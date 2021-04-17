import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import React from "react";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
        </Layout>
    )
}