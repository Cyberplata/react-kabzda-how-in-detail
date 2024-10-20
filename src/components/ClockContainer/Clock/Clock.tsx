// import React, {useEffect, useState} from "react";
//
// type PropsType = {}
//
// const getTwoDigitsString = (num: number) => num < 10
//     ? "0" + num
//     : num
//
// export const Clock: React.FC<PropsType> = (props) => {
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
import {AnalogClock} from "./AnalogClock/AnalogClock";
// import './AnalogClock.css';

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

export const Clock: React.FC<PropsType> = ({ mode, format }) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(intervalID);
    }, []);

    const hours = format === '24-hour' ? date.getHours() : get12HourFormat(date.getHours()).hours;
    const suffix = format === '12-hour' ? get12HourFormat(date.getHours()).suffix : '';

    if (mode === 'digital') {
        return (
            <div>
                <span>{getTwoDigitsString(hours)}</span>
                :
                <span>{getTwoDigitsString(date.getMinutes())}</span>
                :
                <span>{getTwoDigitsString(date.getSeconds())}</span>
                {suffix && <span> {suffix}</span>}
            </div>
        );
    }

    // // Аналоговые часы (в виде наброска):
    // const secondsStyle = {
    //     transform: `rotate(${date.getSeconds() * 6}deg)`
    // };
    // const minutesStyle = {
    //     transform: `rotate(${date.getMinutes() * 6}deg)`
    // };
    // const hoursStyle = {
    //     transform: `rotate(${hours * 30 + date.getMinutes() * 0.5}deg)`
    // };

    return (
        // <div className="clock">
        //     <div className="analog-clock">
        //         <div className="hour-hand" style={hoursStyle}></div>
        //         <div className="minute-hand" style={minutesStyle}></div>
        //         <div className="second-hand" style={secondsStyle}></div>
        //     </div>
        // </div>
        <AnalogClock get12HourFormat={get12HourFormat} format={format}/>
    );
};
