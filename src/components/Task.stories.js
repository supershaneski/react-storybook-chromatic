import React from 'react';
import { action } from '@storybook/addon-actions';
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/,
}

export const defaultTaskData = {
  id: '1',
  title: 'Lorem ipsum dolor vanilla',
  state: 'TASK_INBOX',
}

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
}

export const Default = () => {
  return <Task task={defaultTaskData} {...actionsData} />
}

const longTextData = {
    ...defaultTaskData,
    title: 'Lorem ipsum dolor vanilla campor dokomade mo hitokri battousai et siquitor encomienda dutour covfefe amuro.',
}
export const LongText = () => {
    return <Task task={longTextData} {...actionsData} />
}

const archivedData = {
    ...defaultTaskData,
    state: 'TASK_ARCHIVED',
}
export const Archived = () => {
    return <Task task={archivedData} {...actionsData} />
}

const pinnedData = {
    ...defaultTaskData,
    state: 'TASK_PINNED',
}
export const Pinned = () => {
    return <Task task={pinnedData} {...actionsData} />
}