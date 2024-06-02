import { action } from '@storybook/addon-actions';

import React from "react";
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: "UncontrolledRating",
    component: UncontrolledRating,
};

const onChangeHandler = action('onClick')

export const TestUncontrolledRating = () => {
    return <UncontrolledRating />
}