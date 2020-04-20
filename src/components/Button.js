import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ text, onClick}) {
    return (
        <button className={styles.button} onClick={onClick}>
        {
            text
        }
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}