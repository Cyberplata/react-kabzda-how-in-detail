import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    // onClickHandler: (value: number) => void
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log("UncontrolledRating rendering")

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <MemoizedUncontrolledStar selected={value > 0}
                                      setValue={() => {
                                          setValue(1);
                                          props.onChange(1)
                                      }}
            />
            <MemoizedUncontrolledStar selected={value > 1}
                                      setValue={() => {
                                          setValue(2);
                                          props.onChange(2)
                                      }}
            />
            <MemoizedUncontrolledStar selected={value > 2}
                                      setValue={() => {
                                          setValue(3);
                                          props.onChange(3)
                                      }}
            />
            <MemoizedUncontrolledStar selected={value > 3}
                                      setValue={() => {
                                          setValue(4);
                                          props.onChange(4)
                                      }}
            />
            <MemoizedUncontrolledStar selected={value > 4}
                                      setValue={() => {
                                          setValue(5);
                                          props.onChange(5)
                                      }}
            />
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return <span onClick={() => {
        props.setValue()
    }}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}

const MemoizedUncontrolledStar = React.memo(Star);