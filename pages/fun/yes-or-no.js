import React, {useState} from "react";
import styles from "./yes-or-no.module.css";

const getRandomAnswer = (userQuestion) => {
    if (userQuestion.includes("beautiful")) {
        return "Jin Hui"
    }
    const randomNum = Math.random();
    return randomNum > 0.5 ? "Yes" : "No";
}


const yesOrNo = () => {
    const [userQuestion, setUserQuestion] = useState("");
    const [randomAnswer, setRandomAnswer] = useState("Yes");

    return (
        <div className={styles.root}>
            <input id="question" onChange={(event) => setUserQuestion(event.target.value)} type="text"
                   className={styles.question} placeholder="Input Your Question Here"/>
            <button className={styles.button} onClick={() => setRandomAnswer(getRandomAnswer(userQuestion))}>
                click to get your yes or no answer
            </button>
            <h1 className={styles.answer}>{randomAnswer}</h1>
        </div>
    )
}

export default yesOrNo;