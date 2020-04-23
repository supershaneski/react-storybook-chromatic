import React from 'react';
import { action } from '@storybook/addon-actions';
import BottomPanel from './BottomPanel';

export default {
  component: BottomPanel,
  title: 'BottomPanel',
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onClick: action('onClick'),
}

export const Default = () => {
  return <BottomPanel mode="DEFAULT" {...actionsData} />
}

export const Mobile = () => {
    return <BottomPanel mode="MOBILE" {...actionsData} />
}
