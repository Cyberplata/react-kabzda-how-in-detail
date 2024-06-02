import { action } from '@storybook/addon-actions';

import React, {useState} from "react";
import {OnOff} from "./OnOff";

export default {
    component: OnOff,
};

export const OnMode = () => {
    return <OnOff on={true} onChange={action('clicked')}/>
}

export const OffMode = () => {
    return <OnOff on={false} onChange={() => {}}/>
}

export const ModeChanging = () => {
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return <OnOff on={switchOn} onChange={setSwitchOn}/>
}


