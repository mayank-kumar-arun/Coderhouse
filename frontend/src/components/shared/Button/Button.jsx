import React from 'react';
import styles from './Button.module.css';
const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
            <img
                className={styles.arrow}
                src="https://raw.githubusercontent.com/codersgyan/codershouse-mern/part-3/frontend/public/images/arrow-forward.png"
                alt="arrow"
            />
        </button>
    );
};
export default Button;