// Select.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectCoza from './SelectCoza';
import './SelectCoza.css';

export default {
    title: 'Components/SelectCoza',
    component: SelectCoza,
} as Meta;

const Template: StoryFn<typeof SelectCoza> = (args) => <SelectCoza {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
    options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ],
    selectedValue: '',
    onSelect: (value: string) => console.log(value),
};

export const Expanded = () => {
    const [selectedValue, setSelectedValue] = useState('');
    return (
        <SelectCoza
            options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' },
            ]}
            selectedValue={selectedValue}
            onSelect={(value: string) => setSelectedValue(value)}
        />
    );
};

Expanded.parameters = {
    actions: { argTypesRegex: '^on.*' },
};

export const Dynamic = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    return (
        <SelectCoza
            options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' },
            ]}
            selectedValue={selectedValue}
            onSelect={(value: string) => setSelectedValue(value)}
        />
    );
};

Dynamic.parameters = {
    actions: { argTypesRegex: '^on.*' },
};