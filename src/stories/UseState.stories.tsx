import React, {useMemo, useState} from "react";  // 3281231231231

export default {
    title: "useState demo",
};

function generateData() {
    // difficult counting
    console.log("generateData")
    return 3281231231231;
}

export const Example1 = () => {
    console.log("Example1")

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData); // [3281231231231, function(newValue){}]

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}