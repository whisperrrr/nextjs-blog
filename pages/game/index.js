import Layout, {siteTitle} from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import React from "react";

export default function Game() {
    return (
        <Layout secondHome>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h2 className={utilStyles.headingLg}>Little Game</h2>
                <Link href={`/fun/yes-or-no`}>
                    <a>Yes or No</a>
                </Link>
            </section>
        </Layout>
    )
}