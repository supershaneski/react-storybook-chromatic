import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './InboxPanel.module.css';
import Button from './Button';
import TaskList from './TaskList';

export function InboxPanel({ isArchivedVisible, onArchivedVisible}) {
    const showHideArchived = () => {
        onArchivedVisible(!isArchivedVisible)
    }
    const buttonText = (isArchivedVisible)?'Hide Archived':'Show Archived';
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>Taskbox</h1>
                </div>
                <div className={styles.buttonPanel}>
                    <Button text={buttonText} onClick={showHideArchived} />
                </div>
            </header>
            <div className={styles.main}>
                <TaskList />
            </div>
        </div>
    )
}

InboxPanel.propTypes = {
    isArchivedVisible: PropTypes.bool,
    onArchivedVisible: PropTypes.func,
}

const setArchiveVisible = (flag) => {
    return {
        type: 'SET_ARCHIVED_VISIBILITY',
        payload: flag,
    }
}

const mapStateToProps = (state) => {
    const { isArchivedVisible } = state.visible;
    return {
        isArchivedVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onArchivedVisible: (flag) => {
            dispatch(setArchiveVisible(flag));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InboxPanel);


