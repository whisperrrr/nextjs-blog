import utilStyles from '../../styles/utils.module.css';
import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/post";
import Date from "../../components/date";
import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
            <div>
                <Link href="/blog">
                    <a>← Back to home</a>
                </Link>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}