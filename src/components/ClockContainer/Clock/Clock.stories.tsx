// import React from "react";
// import {Clock} from "./Clock";
//
// export default {
//     title: "Clock",
//     component: Clock
// };
//
// export const BaseExample = () => {
//     console.log("BaseExample")
//
//     return <Clock/>
// }



// GPT
import React, { useState } from "react";
import { Clock } from "./Clock";

export default {
    title: "Clock",
    component: Clock
};

export const ClockContainer: React.FC = () => {
    const [mode, setMode] = useState<'digital' | 'analog'>('digital');
    const [format, setFormat] = useState<'12-hour' | '24-hour'>('24-hour');

    const handleClickMode = () => setMode(mode === 'digital' ? 'analog' : 'digital')

    const handleClickFormat = () => setFormat(format === '24-hour' ? '12-hour' : '24-hour')

    return (
        <div>
            <Clock mode={mode} format={format} />
            <button onClick={handleClickMode}>
                Switch to {mode === 'digital' ? 'Analog' : 'Digital'} Mode
            </button>
            <button onClick={handleClickFormat}>
                Switch to {format === '24-hour' ? '12-hour' : '24-hour'} Format
            </button>
        </div>
    );
};
