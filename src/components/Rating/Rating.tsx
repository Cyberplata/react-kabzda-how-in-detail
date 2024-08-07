import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log("СontrolledRating rendering")
    return (
        <div>
            <MemoizedStar selected={props.value > 0} onClick={props.onClick} value={1}/>
            <MemoizedStar selected={props.value > 1} onClick={props.onClick} value={2}/>
            <MemoizedStar selected={props.value > 2} onClick={props.onClick} value={3}/>
            <MemoizedStar selected={props.value > 3} onClick={props.onClick} value={4}/>
            <MemoizedStar selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return <span onClick={() => {
        props.onClick(props.value)
    }}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}

const MemoizedStar = React.memo(Star);