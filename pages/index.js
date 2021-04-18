import React from "react";
import Layout from '../components/layout';
import Typography from "@material-ui/core/Typography";
import styles from "../styles/home.module.css";

export default function Home() {
    return (
        <Layout home secondHome>
            <section className={styles.mainContainer}>
                <Typography className={styles.quote} variant="h1">CHASING STAR</Typography>
            </section>
        </Layout>
    )
}