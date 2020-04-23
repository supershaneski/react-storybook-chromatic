import { createStore, combineReducers } from 'redux';
import { TaskStates } from '../components/Task';

function getSimpleId() {
    return Math.random().toString(26).slice(2);
}

const ActionTypes = {
    ADD_TASK: 'ADD_TASK',
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK',
    SET_ARCHIVED_VISIBILITY: 'SET_ARCHIVED_VISIBILITY',
}

export const onAddTask = (task) => {
    return {
        type: ActionTypes.ADD_TASK,
        payload: task,
    }
}

export const archiveTask = (id) => {
    return {
        type: ActionTypes.ARCHIVE_TASK,
        payload: id,
    }
}

export const pinTask = (id) => {
    return {
        type: ActionTypes.PIN_TASK,
        payload: id,
    }
}

export const setArchiveVisible = (flag) => {
    return {
        type: ActionTypes.SET_ARCHIVED_VISIBILITY,
        payload: flag,
    }
}

const addTask = (state, action) => {
    let tasks = state.tasks.slice(0);
    let id = getSimpleId();
    tasks.push({
        id: id,
        title: action.payload,
        state: TaskStates.TASK_INBOX,
    })
    return {
        ...state,
        tasks: tasks,
    }
}

const procTask = (state, action) => {
    let tasks = state.tasks.slice(0);
    return {
        ...state,
        tasks: tasks.map(task => {
            if(action.payload === task.id) {
                if(action.type === ActionTypes.ARCHIVE_TASK && task.state !== TaskStates.TASK_ARCHIVED) {
                    return {
                        ...task,
                        state: TaskStates.TASK_ARCHIVED,
                    }
                } else if(action.type === ActionTypes.PIN_TASK && task.state !== TaskStates.TASK_PINNED) {
                    return {
                        ...task,
                        state: TaskStates.TASK_PINNED,
                    }
                } else {
                    return {
                        ...task,
                        state: TaskStates.TASK_INBOX,
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
        state: TaskStates.TASK_INBOX,
    }
    var tasks = [
        {...baseTask, id: '1', title: text + '1',},
        {...baseTask, id: '2', title: text + '2',},
        {...baseTask, id: '3', title: text + '3',},
        {...baseTask, id: '4', title: text + '4',},
        {...baseTask, id: '5', title: text + '5', state: TaskStates.TASK_PINNED},
        {...baseTask, id: '6', title: text + '6',},
        {...baseTask, id: '7', title: text + '7', state: TaskStates.TASK_ARCHIVED},
    ]
    return {
        tasks: tasks,
    }
}

const task = (state = initialTask(), action) => {
    switch(action.type) {
        case ActionTypes.ADD_TASK:
            return addTask(state, action);
        case ActionTypes.ARCHIVE_TASK:
            return procTask(state, action);
        case ActionTypes.PIN_TASK:
            return procTask(state, action);
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
        case ActionTypes.SET_ARCHIVED_VISIBILITY:
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