import { action } from '@storybook/addon-actions';

import {Rating, RatingValueType} from "./Rating";
import React, {useState} from "react";

export default {
    component: Rating,
};

const onChangeHandler = action('onClick')

export const RatingEmpty = () => {
    return <Rating value={0}
                   onClick={onChangeHandler}
    />
}

export const RatingFilled = () => {
    return <Rating value={5}
                   onClick={() => {}}
    />
}

export const RatingDynamic = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return <Rating value={ratingValue}
                   onClick={setRatingValue}
    />
}
