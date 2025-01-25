import React, { useEffect } from 'react';
import styles from './home.module.css';

const HomeViews = () => {
    useEffect(() => {
        const text = document.querySelector(`.${styles.secondText}`);
        const textLoad = () => {
            if (text) {
                setTimeout(() => {
                    text.textContent = "Frontend Developer";
                }, 0);
                setTimeout(() => {
                    text.textContent = "UI/UX Designer";
                }, 4000);
                setTimeout(() => {
                    text.textContent = "Backend Developer";
                }, 8000);
            };
        };
        textLoad();
        setInterval(textLoad, 12000);
    }, []);

    return (
        <a className={styles.page} href="#">
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <span className={`${styles.text} ${styles.firstText}`}>Hi, I&apos;m A </span>
                    <span className={`${styles.text} ${styles.secondText}`}></span>
                </div>
            </div>
        </a>
    );
};

export default HomeViews;