import React from 'react';

type Props = {
    date:  Date
    getTwoDigitsString: (num: number) => string | number
    suffix: string
    hours: number
}

export const DigitalClock = ({date, getTwoDigitsString, hours, suffix}: Props) => {

    return (
        <div>
            <span>{getTwoDigitsString(hours)}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
            {suffix && <span> {suffix}</span>}
        </div>
    )
};