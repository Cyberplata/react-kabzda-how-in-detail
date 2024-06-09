import React, {useRef, useState} from "react";
import {action} from '@storybook/addon-actions';

export default {
    title: "input",
    // component: input,
};

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(event) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef(null);

    const onClickSaveHandler = () => {
        const el = inputRef.current;

        setValue(el.value)
    }

    return <>
        <input ref={inputRef} /> <button onClick={onClickSaveHandler}>save</button> - actual value: {value}
    </>
}

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>


