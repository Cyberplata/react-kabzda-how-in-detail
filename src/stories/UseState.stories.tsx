import React, {useState} from "react";  // 0

export default {
    title: "useState demo",
};

function generateData() {
    return 3281231231231;
}

export const Example1 = () => {
    console.log("Example1")

    generateData()

    const [counter, setCounter] = useState(0); // [0, function(newValue){}]

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}