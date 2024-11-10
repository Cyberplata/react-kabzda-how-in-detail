import React from "react";
import {type ClockViewPropsType} from "../ClockDimych";

export const getTwoDigitsString = (num: number) => num < 10
    ? "0" + num
    : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{getTwoDigitsString(date.getHours())}</span>
        :
        <span>{getTwoDigitsString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitsString(date.getSeconds())}</span>
    </>
}