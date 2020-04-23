import React, {createRef} from 'react';
import { Provider } from 'react-redux';
import * as TestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { InboxPanel } from './InboxPanel';

describe('InboxPanel', () => {
    
    test("Redux", () => {
        
        const defaultTaskData = {
            id: '1',
            title: 'Lorem ipsum dolor vanilla',
            state: 'TASK_INBOX',
        }

        const mixedTasksData = [
            { ...defaultTaskData, id: '1', state: 'TASK_ARCHIVED' },
            { ...defaultTaskData, id: '2', state: 'TASK_PINNED' },
            { ...defaultTaskData, id: '3' },
        ]

        const initialTasks = {
            tasks: mixedTasksData,
        }

        const initialVisibility = {
            isArchivedVisible: false,
        }

        const store = {
            getState: () => {
                return {
                    task: initialTasks,
                    visible: initialVisibility,
                };
            },
            subscribe: () => 0,
            dispatch: console.log('dispatch'),
        }

        const wrapper = render(<Provider store={store}><InboxPanel /></Provider>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
    });
    
});