import { action } from '@storybook/addon-actions';
import React, {useState} from "react";
import {OnOff} from "./OnOff";

export default {
    title: "OnOff",
    component: OnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => {
    return <OnOff on={true} onChange={callback}/>
}

export const OffMode = () => {
    return <OnOff on={false} onChange={callback}/>
}

export const ModeChanging = () => {
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return <OnOff on={switchOn} onChange={setSwitchOn}/>
}


