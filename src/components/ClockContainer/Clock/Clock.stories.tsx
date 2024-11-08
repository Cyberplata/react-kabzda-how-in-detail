// import React from "react";
// import {ClockGPT} from "./ClockGPT";
//
// export default {
//     title: "ClockGPT",
//     component: ClockGPT
// };
//
// export const BaseExample = () => {
//     console.log("BaseExample")
//
//     return <ClockGPT/>
// }



// GPT
import React, { useState } from "react";
import {ClockGPT} from "./ClockGPT/ClockGPT";

export default {
    title: "Clock",
    component: ClockGPT
};

export const ClockContainerGPT: React.FC = () => {
    const [mode, setMode] = useState<'digital' | 'analog'>('digital');
    const [format, setFormat] = useState<'12-hour' | '24-hour'>('24-hour');

    const handleClickMode = () => setMode(mode === 'digital' ? 'analog' : 'digital')

    const handleClickFormat = () => setFormat(format === '24-hour' ? '12-hour' : '24-hour')

    return (
        <div>
            <ClockGPT mode={mode} format={format} />
            <button onClick={handleClickMode}>
                Switch to {mode === 'digital' ? 'Analog' : 'Digital'} Mode
            </button>
            <button onClick={handleClickFormat}>
                Switch to {format === '24-hour' ? '12-hour' : '24-hour'} Format
            </button>
        </div>
    );
};
