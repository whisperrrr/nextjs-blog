import React from "react";
import styles from "./yes-or-no.module.css";

export async function getStaticProps() {
    const res = await fetch('https://yesno.wtf/api')
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {data},
    }
}

const yesOrNo = ({data}) => {
    return (
        <div className={styles.root}>
            <button className={styles.button} onClick={() => location.reload()}>Keep your question in your mind and
                click to get the answer
            </button>
            <h1 className={styles.answer}>{data.answer}</h1>
        </div>
    )
}

export default yesOrNo;