import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView/AnalogClockView";
import {DigitalClockView} from "./DigitalClockView/DigitalClockView";

type PropsType = {
    mode?: "analog" | "digital"
}

export const ClockDimych: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        // debugger
        console.log("useEffect only first render (componentDidMount)")

        const intervalID = setInterval(() => {
            // console.log("tick: " + date)

            setDate(new Date())
        }, 1000);

        return () => {
            // debugger
            clearInterval(intervalID)
        }
    }, []);

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}