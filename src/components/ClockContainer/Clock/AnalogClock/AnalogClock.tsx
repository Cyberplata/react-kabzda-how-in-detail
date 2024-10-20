import React, {useState} from 'react';
import './AnalogClock.css';

type Props = {
    get12HourFormat: (hours: number) => {hours: number, suffix: string}
    format: '12-hour' | '24-hour'
}

export const AnalogClock = ({get12HourFormat, format}: Props) => {
    const [date, setDate] = useState(new Date());

    const hours = format === '24-hour' ? date.getHours() : get12HourFormat(date.getHours()).hours;

    // Аналоговые часы (в виде наброска):
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30 + date.getMinutes() * 0.5}deg)`
    };

    return (
        <div className="clock">
            <div className="analog-clock">
                <div className="hour-hand" style={hoursStyle}></div>
                <div className="minute-hand" style={minutesStyle}></div>
                <div className="second-hand" style={secondsStyle}></div>
            </div>
        </div>
    );
};