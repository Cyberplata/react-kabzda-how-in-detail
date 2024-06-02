import { action } from '@storybook/addon-actions';

import {Rating, RatingValueType} from "./Rating";
import React, {useState} from "react";

export default {
    title: "Rating stories",
    component: Rating,
};

const onChangeHandler = action('onClick')

export const EmptyRating = () => {
    return <Rating value={0}
                   onClick={onChangeHandler}
    />
}


export const Rating1 = () => {
    return <Rating value={1}
                   onClick={onChangeHandler}
    />
}

export const Rating2 = () => {
    return <Rating value={2}
                   onClick={onChangeHandler}
    />
}

export const Rating3 = () => {
    return <Rating value={3}
                   onClick={onChangeHandler}
    />
}

export const Rating4 = () => {
    return <Rating value={4}
                   onClick={onChangeHandler}
    />
}

export const Rating5 = () => {
    return <Rating value={5}
                   onClick={() => {}}
    />
}

export const RatingChanging = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return <Rating value={ratingValue}
                   onClick={setRatingValue}
    />
}
