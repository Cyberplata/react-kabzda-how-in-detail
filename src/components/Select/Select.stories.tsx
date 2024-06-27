import {action} from '@storybook/addon-actions';
import React from "react";
import {Select} from './Select';

export default {
    title: "Select",
    component: Select,
};

// const onChangeHandler = action('onChange')
// const onClickHandler= action('some item was clicked')

export const WithValue = () =>
    <>
        <Select value={"2"}
                onChange={action("Value changed")}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>

export const WithoutValue = () =>
    <>
        <Select onChange={action("Value changed")}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>
