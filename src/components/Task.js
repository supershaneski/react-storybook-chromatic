import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    const checkIcon = (state === 'TASK_ARCHIVED')?styles.iconCheckOn:styles.iconCheckOff;
    const pinIcon = (state === 'TASK_PINNED')?styles.iconStarOn:styles.iconStarOff;
    const classCheck = [styles.icon, checkIcon].join(' ');
    const classPin = [styles.icon, pinIcon].join(' ');
    const classText = (state === 'TASK_ARCHIVED')?styles.archived:styles.normal;
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <span className={classCheck} 
                onClick={() => onArchiveTask(id)}></span>
            </div>
            <div className={styles.item}>
                <input className={classText} type="text" value={title} readOnly={true} />
            </div>
            <div className={styles.item}>
                <span className={classPin} onClick={() => onPinTask(id)}></span>
            </div>            
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
}