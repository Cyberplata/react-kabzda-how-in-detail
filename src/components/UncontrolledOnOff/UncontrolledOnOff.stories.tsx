import { action } from '@storybook/addon-actions';

import React from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff,
};

const onChangeHandler = action('onClick')

export const TestUncontrolledOnOff = () => {
    return <UncontrolledOnOff onChange={onChangeHandler}/>
}