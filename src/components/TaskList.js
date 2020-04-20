import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './TaskList.module.css';
import Task from './Task';

export function TaskList({ tasks, isArchivedVisible, onArchiveTask, onPinTask }) {
    
    const events = {
        onPinTask,
        onArchiveTask,
    }

    if(tasks.length === 0) {
        return (
            <div className={styles.emptyContainer}>
                <span>No Tasks</span>
            </div>
        )
    }
    
    function sortTasks() {
        let archived = [];
        if(isArchivedVisible) {
            archived = tasks.filter(item => {
                return item.state === 'TASK_ARCHIVED'
            })
        }
        const pinned = tasks.filter(item => {
            return item.state === 'TASK_PINNED'
        })
        const inbox = tasks.filter(item => {
            return item.state !== 'TASK_PINNED' && item.state !== 'TASK_ARCHIVED'
        })
        return [
            ...archived,
            ...pinned,
            ...inbox,
        ]
    }

    return (
        <div className={styles.container}>
        {
            sortTasks().map((item) => {
                return (
                    <Task key={item.id} task={item} {...events} />
                )
            })
        }
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
}

const archiveTask = (id) => {
    return {
        type: 'ARCHIVE_TASK',
        payload: id,
    }
}

const pinTask = (id) => {
    return {
        type: 'PIN_TASK',
        payload: id,
    }
}

const mapStateToProps = (state) => {
    const { isArchivedVisible } = state.visible;
    const tasks = state.task.tasks.filter(item => {
        if(isArchivedVisible) {
            return item.state === 'TASK_PINNED' || item.state === 'TASK_INBOX' || item.state === 'TASK_ARCHIVED' 
        } else {
            return item.state !== 'TASK_ARCHIVED'
        }
    })
    return {
        tasks: tasks,
        isArchivedVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onArchiveTask: (id) => {
            dispatch(archiveTask(id));
        },
        onPinTask: (id) => {
            dispatch(pinTask(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
