import React, {useMemo, useState} from "react";  // 1

export default {
    title: "useState demo",
};

function generateData() {
    // difficult counting
    console.log("generateData")
    return 1;
}

export const Example1 = () => {
    console.log("Example1")

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData); // [3281231231231, function(newValue){}]
    // 1.
    // Используем в качестве initialState в useState функцию,
    // чтобы какой-то тяжелый подсчёт-синхронный не блокировал основной поток и не вызывал его лишний раз
    // 2.
    // Передача функции changer в setCounter, а не конкретное значение (counter + 1)
    // Но useState не запоминает эти функции, а просто вызывает

    const changer = (state: number) => {
        // debugger
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}