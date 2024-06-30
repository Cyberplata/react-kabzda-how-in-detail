import {action} from '@storybook/addon-actions';
import React, {useState} from "react";
import {Select} from './Select';

export default {
    title: "Select",
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState('2');
    return <>
        <Select value={value}
                onChange={action("Value changed")}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>
}

export const WithoutValue = () =>
    <>
        <Select onChange={action("Value changed")}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>
