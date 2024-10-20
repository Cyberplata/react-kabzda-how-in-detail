import React, {useEffect, useState} from "react";

type PropsType = {}

const getTwoDigitsString = (num: number) => num < 10
    ? "0" + num
    : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")

        setInterval(() => {
            console.log("tick: " + date)

            setDate(new Date())
        }, 1000)
    }, []);

    // const secondsString = getTwoDigitsString(date.getSeconds())
    // const minutesString = getTwoDigitsString(date.getMinutes())
    // const hoursString = getTwoDigitsString(date.getHours())

    return <div>
        <span>{getTwoDigitsString(date.getHours())}</span>
        :
        <span>{getTwoDigitsString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitsString(date.getSeconds())}</span>
    </div>
}