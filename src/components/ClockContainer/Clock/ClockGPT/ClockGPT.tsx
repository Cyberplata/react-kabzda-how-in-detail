// import React, {useEffect, useState} from "react";
//
// type PropsType = {}
//
// const getTwoDigitsString = (num: number) => num < 10
//     ? "0" + num
//     : num
//
// export const ClockGPT: React.FC<PropsType> = (props) => {
//     const [date, setDate] = useState(new Date())
//
//     useEffect(() => {
//         // debugger
//         console.log("useEffect only first render (componentDidMount)")
//
//         const intervalID = setInterval(() => {
//             console.log("tick: " + date)
//
//             setDate(new Date())
//         }, 1000);
//
//         return () => {
//             // debugger
//             clearInterval(intervalID)
//         }
//     }, []);
//
//     return <div>
//         <span>{getTwoDigitsString(date.getHours())}</span>
//         :
//         <span>{getTwoDigitsString(date.getMinutes())}</span>
//         :
//         <span>{getTwoDigitsString(date.getSeconds())}</span>
//     </div>
// }

// GPT
import React, {useEffect, useState} from "react";
import {AnalogClock} from "../AnalogClock/AnalogClock";
import {DigitalClock} from "../DigitalClock/DigitalClock";


type PropsType = {
    mode: 'digital' | 'analog',
    format: '12-hour' | '24-hour'
}

const getTwoDigitsString = (num: number) => num < 10 ? "0" + num : num;

const get12HourFormat = (hours: number) => {
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours % 12 || 12;
    return { hours: adjustedHours, suffix };
}

export const ClockGPT: React.FC<PropsType> = ({ mode, format }) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(intervalID);
    }, []);

    const hours = format === '24-hour' ? date.getHours() : get12HourFormat(date.getHours()).hours;
    const suffix = format === '12-hour' ? get12HourFormat(date.getHours()).suffix : '';

    return (mode === 'digital')
        ? <DigitalClock date={date} getTwoDigitsString={getTwoDigitsString} hours={hours} suffix={suffix}/>
        : <AnalogClock date={date} get12HourFormat={get12HourFormat} format={format}/>
};
