import { action } from '@storybook/addon-actions';
import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export default {
    title: "Select",
    // component: Select,
};

// const onChangeHandler = action('onChange')
// const onClickCallBack = action('some item was clicked')

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}
