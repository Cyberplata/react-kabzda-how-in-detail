import { action } from '@storybook/addon-actions';

import React from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff,
};

const onChangeHandler = action('on or off clicked')

export const OnMode = () => {
    return <UncontrolledOnOff onChange={onChangeHandler} defaultOn={true}/>
}
export const OffMode = () => {
    return <UncontrolledOnOff onChange={onChangeHandler} defaultOff={false}/>
}
export const DefaultInputValue = () => {
    return <input defaultValue={"yo"} />
}