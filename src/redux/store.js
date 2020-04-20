import { createStore, combineReducers } from 'redux';

const procTask = (state, action) => {
    let tasks = state.tasks.slice(0);
    return {
        ...state,
        tasks: tasks.map(task => {
            if(action.payload === task.id) {
                if(action.type === 'ARCHIVE_TASK' && task.state !== 'TASK_ARCHIVED') {
                    return {
                        ...task,
                        state: 'TASK_ARCHIVED',
                    }
                } else if(action.type === 'PIN_TASK' && task.state !== 'TASK_PINNED') {
                    return {
                        ...task,
                        state: 'TASK_PINNED',
                    }
                } else {
                    return {
                        ...task,
                        state: 'TASK_INBOX',
                    }
                }
            } else {
                return task;
            }
        }),
    }
}

const initialTask = () => {
    const text = 'Lorem ipsum dolor quet cosme lorena ';
    const baseTask = {
        title: 'Lorem ipsum dolor quet cosme lorena.',
        state: 'TASK_INBOX',
    }
    var tasks = [
        {...baseTask, id: '1', title: text + '1',},
        {...baseTask, id: '2', title: text + '2',},
        {...baseTask, id: '3', title: text + '3',},
        {...baseTask, id: '4', title: text + '4',},
        {...baseTask, id: '5', title: text + '5', state: 'TASK_PINNED'},
        {...baseTask, id: '6', title: text + '6',},
        {...baseTask, id: '7', title: text + '7', state: 'TASK_ARCHIVED'},
    ]
    return {
        tasks: tasks,
    }
}

const task = (state = initialTask(), action) => {
    switch(action.type) {
        case 'ARCHIVE_TASK':
            return procTask(state, action)
        case 'PIN_TASK':
            return procTask(state, action)
        case 'SET_ARCHIVED_VISIBILITY':
            return procVisible(state, action)
        default:
            return state;
    }
}

const procVisible = (state, action) => {
    return {
        ...state,
        isArchivedVisible: action.payload,
    }
}
const initialVisibility = () => {
    return {
        isArchivedVisible: false,
    }
}
const visible = (state = initialVisibility(), action) => {
    switch(action.type) {
        case 'SET_ARCHIVED_VISIBILITY':
            return procVisible(state, action)
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    task,
    visible
})

export default createStore(rootReducer);