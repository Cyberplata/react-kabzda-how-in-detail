import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
};

export const SimpleExample = () => {
    console.log("SimpleExample")

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        // debugger
        console.log("useEffect every render")
        document.title = counter.toString()
    });

    useEffect(() => {
        // debugger
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, []);

    useEffect(() => {
        // debugger
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter]);

    return <>
        Hello,
        <div>counter: {counter},</div>
        <div>fake: {fake}</div>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample")

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("useEffect first render and every counter change")

        setTimeout(() => {
            // debugger;
            console.log("setTimeout")
            document.title = counter.toString()
        }, 2000)

    }, [counter]);

    return <>
        Hello,
        <div>counter: {counter},</div>
        <div>fake: {fake}</div>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}


