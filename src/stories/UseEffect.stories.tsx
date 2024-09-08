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
        console.log("useEffect")
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval
        //indexedDB - работа с базой данных в браузере
        //document.getElementId
    }, [counter]);

    return <>
        Hello,
        counter: {counter},
        fake: {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
    </>
}