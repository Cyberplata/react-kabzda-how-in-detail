import { action } from '@storybook/addon-actions';
import React, {useState} from "react";
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: "UncontrolledRating",
    component: UncontrolledRating,
};
const onChangeHandler = action('rating changed inside component')

export const EmptyRating = () => {
    return <UncontrolledRating defaultValue={0} onChange={onChangeHandler}/>
}
export const Rating1 = () => {
    return <UncontrolledRating defaultValue={1} onChange={onChangeHandler}/>
}
export const Rating2 = () => {
    return <UncontrolledRating defaultValue={2} onChange={onChangeHandler}/>
}
export const Rating3 = () => {
    return <UncontrolledRating defaultValue={3} onChange={onChangeHandler}/>
}
export const Rating4 = () => {
    return <UncontrolledRating defaultValue={4} onChange={onChangeHandler}/>
}
export const Rating5 = () => {
    return <UncontrolledRating defaultValue={5} onChange={onChangeHandler}/>
}