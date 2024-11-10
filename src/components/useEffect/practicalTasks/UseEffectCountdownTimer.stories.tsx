import React, {useEffect, useState} from "react";

export default {
    title: "UseEffectCountdownTimer",
};

// Через setTimeout
export const UseEffectCountdownTimer = () => {
    const [counter, setCounter] = useState(10);

    const decrease = () => {
        console.log("decrease " + counter)
        if (!counter) return;
        setCounter(prevState => prevState - 1)
    }
    const cleaningFn = () => {
        console.log("RESET EFFECT " + counter)
        clearTimeout(timeoutId)
    }

    const timeoutId = setTimeout(decrease, 1000)
    useEffect(() => {
        // const timeoutId = setTimeout(decrease, 1000)
        console.log("Effect occurred: " + counter)

        return cleaningFn
    }, [counter]);


    return <>
        {counter
            ? <p>Hello, counter: {counter}</p>
            : <p>Время вышло! - {counter}</p>
        }
        <button onClick={cleaningFn}>+</button>
    </>
}

// Через setInterval
export const CountdownTimer2 = () => {
    const [counter, setCounter] = useState(10);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (!isActive) return; // Останавливаем выполнение, если таймер не активен

        const intervalId = setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter <= 1) {
                    clearInterval(intervalId); // Останавливаем таймер на нуле
                    setIsActive(false); // Меняем состояние активности, чтобы не перезапускать
                    return 0;
                }
                return prevCounter - 1;
            });
        }, 1000);

        // Очистка интервала при размонтировании
        return () => clearInterval(intervalId);
    }, [isActive]);

    // Функция для остановки таймера
    const stopTimer = () => {
        setIsActive(false);
    };

    // Функция продолжения таймера
    const letGoTime = () => {
        setIsActive(true)
    }

    return (
        <>
            {counter > 0
                ? <p>Отсчет: {counter}</p>
                : <p>Время вышло!</p>
            }
            <button onClick={stopTimer} disabled={!isActive}>
                Остановить таймер
            </button>
            <button onClick={letGoTime} disabled={isActive}>
                Продолжить таймер
            </button>
        </>
    );
};

