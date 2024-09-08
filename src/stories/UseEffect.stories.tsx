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

        // setInterval(() => {
        //     console.log("tick: " + counter)
        //     setCounter(state => state + 1)
        // }, 1000)

    }, []);

    return <>
        Hello,
        <div>counter: {counter},</div>
        <div>fake: {fake}</div>
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}

export const SetWatchEffectExample = () => {
    console.log("SetWatchEffectExample")

    // Функция для получения текущего времени в формате HH:MM:SS
    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const second = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${second}`;
    };

    const [watch, setWatch] = useState(getCurrentTime);

    useEffect(() => {
        console.log("useEffect first render and every counter change")

        setInterval(() => {
            console.log("tick: " + watch)

            setWatch((state) => state)
        }, 1000)

    }, []);

    return <>
        Hello,
        <div>Watch: {watch},</div>
        {/*<div>fake: {fake}</div>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}


export const SetWatchEffectExample1 = () => {
    console.log("SetWatchEffectExample1");
    // debugger
    // // 1.Функция для получения текущего времени в формате HH:MM:SS
    // const getCurrentTime = () => {
    //     const now = new Date();
    //     return now.toLocaleTimeString();
    // };

    // // 2. Функция для получения текущего времени в формате HH:MM:SS
    // const getCurrentTime = () => {
    //     const now = new Date();
    //     const hours = String(now.getHours()).padStart(2, '0');
    //     const minutes = String(now.getMinutes()).padStart(2, '0');
    //     const second = String(now.getSeconds()).padStart(2, '0');
    //     return `${hours}:${minutes}:${second}`;
    // };

    // 3. Функция для получения текущего времени в формате HH:MM:SS
    const getCurrentTime = () => {
        const now = new Date();
        return new Intl.DateTimeFormat('default', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(now);
    };

    const [watch, setWatch] = useState(getCurrentTime());

    useEffect(() => {
        console.log("useEffect first render and every second");

        const intervalId = setInterval(() => {
            console.log("tick: " + getCurrentTime());
            setWatch(getCurrentTime());
        }, 1000);

        // Функция очистки
        const cleanup = () => clearInterval(intervalId);

        // Возвращаем функцию очистки
        return cleanup;

        // // Очистка интервала при размонтировании компонента
        // return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            Hello,
            <div>
                <time dateTime={new Date().toISOString()}>{watch}</time>
            </div>
        </>
    );
};

