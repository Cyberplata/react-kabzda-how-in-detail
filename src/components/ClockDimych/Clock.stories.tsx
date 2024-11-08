import React, {useState} from "react";
import {ClockDimych} from "./ClockDimych";

export default {
    title: "Clock",
    component: ClockDimych
};

export const BaseAnalogExample: React.FC = () => {
    return <ClockDimych mode={"analog"}/>
};


export const BaseDigitalExample: React.FC = () => {
    return <ClockDimych mode={"digital"}/>
};
