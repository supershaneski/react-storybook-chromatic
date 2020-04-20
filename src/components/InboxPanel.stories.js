import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import ConnectedInboxPanel, { InboxPanel } from './InboxPanel';
import { defaultTasksData, mixedTasksData } from './TaskList.stories';

export default {
  component: InboxPanel,
  title: 'InboxPanel',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onArchivedVisible: action('onArchivedVisible'),
}

const store = {
  getState: () => {
      console.log('get state')
      return {
          task: initialTasks,
          visible: initialVisibility,
      };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
}

const initialTasks = {
  tasks: mixedTasksData, //defaultTasksData
}

const initialVisibility = {
  isArchivedVisible: false,
}

export const Default = () => {
  return <ConnectedInboxPanel />
}

export const ArchivedVisible = () => {
  return <InboxPanel isArchivedVisible={true} {...actionsData} />
}