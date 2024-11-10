import React, {useEffect, useRef, useState} from "react";

export default {
    title: "UseEffectWindowSizeTracking",
};

export const UseEffectWindowSizeTracking = () => {
    const initialState = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    const [windowSize, setWindowSize] = useState(initialState);
    console.log("UseEffectWindowSizeTracking render " + windowSize.width + " " + windowSize.height)


    useEffect(() => {
        // debugger;
        console.log("Effect occurred:")

        const handler = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", handler);
        return () => {
            console.log("remove resize")
            window.removeEventListener('resize', handler);
        }
    }, []);

    return <>
        Tracking window size: {windowSize.width} x {windowSize.height}
    </>
}

