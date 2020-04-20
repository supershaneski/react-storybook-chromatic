import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
}

export const defaultButtonData = {
  text: 'Button',
}

export const actionsData = {
  onClick: action('onClick'),
}

export const Default = () => {
  return <Button {...defaultButtonData} {...actionsData} />
}
