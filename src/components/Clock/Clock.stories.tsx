import React from "react";
import {Clock} from "./Clock";

export default {
    title: "Clock",
    component: Clock
};

export const BaseExample = () => {
    console.log("BaseExample")

    // useEffect(() => {
    //     // debugger
    //     console.log("useEffect every render")
    //     document.title = counter.toString()
    // });
    //
    // useEffect(() => {
    //     // debugger
    //     console.log("useEffect only first render (componentDidMount)")
    //     document.title = counter.toString()
    // }, []);
    //
    // useEffect(() => {
    //     // debugger
    //     console.log("useEffect first render and every counter change")
    //     document.title = counter.toString()
    // }, [counter]);

    return <Clock/>
}