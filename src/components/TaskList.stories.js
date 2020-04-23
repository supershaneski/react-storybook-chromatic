import React from 'react';
//import { action } from '@storybook/addon-actions';
import { TaskList } from './TaskList';
import { defaultTaskData, actionsData } from './Task.stories';
import { TaskStates } from './Task';

export default {
  component: TaskList,
  title: 'TaskList',
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...defaultTaskData, id: '1' },
  { ...defaultTaskData, id: '2' },
  { ...defaultTaskData, id: '3' },
]

/*
export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
}*/

export const Default = () => <TaskList tasks={defaultTasksData} {...actionsData} />;

export const mixedTasksData = [
    { ...defaultTaskData, id: '1', state: TaskStates.TASK_ARCHIVED },
    { ...defaultTaskData, id: '2', state: TaskStates.TASK_PINNED },
    { ...defaultTaskData, id: '3' },
]
export const WithPinned = () => <TaskList tasks={mixedTasksData} {...actionsData} />;

export const VisibleArchived = () => <TaskList isArchivedVisible={true} tasks={mixedTasksData} {...actionsData} />;

export const Empty = () => <TaskList tasks={[]} {...actionsData} />;
