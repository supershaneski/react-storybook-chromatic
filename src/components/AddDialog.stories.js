import React from 'react';
import { action } from '@storybook/addon-actions';
import AddDialog from './AddDialog';

export default {
    component: AddDialog,
    title: 'AddDialog',
    excludeStories: /.*Data$/,
}

export const actionsData = {
    onClose: action('onClose'),
}

export const Default = () => {
    return <AddDialog open={true} {...actionsData} />
}