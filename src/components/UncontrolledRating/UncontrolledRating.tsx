import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    // onClickHandler: (value: number) => void
}

export function UncontrolledRating(props: RatingPropsType) {
    // console.log("UncontrolledRating rendering")

    const [value, setValue] = useState(0)

    const handleStarClick = (newValue: number) => {
        setValue(newValue)
        // props.onClickHandler(newValue);
    }

    return (
        <div>
            <Star selected={value > 0} onClickHandler={() => handleStarClick(1)}/>
            {/*<button onClick={() => {setValue(1)}}>1</button>*/}
            <Star selected={value > 1} onClickHandler={() => handleStarClick(2)}/>
            {/*<button onClick={() => {setValue(2)}}>2</button>*/}
            <Star selected={value > 2} onClickHandler={() => handleStarClick(3)}/>
            {/*<button onClick={() => {setValue(3)}}>3</button>*/}
            <Star selected={value > 3} onClickHandler={() => handleStarClick(4)}/>
            {/*<button onClick={() => {setValue(4)}}>4</button>*/}
            <Star selected={value > 4} onClickHandler={() => handleStarClick(5)}/>
            {/*<button onClick={() => {setValue(5)}}>5</button>*/}
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClickHandler: () => void
}

function Star(props: StarPropsType) {
    // console.log("Star rendering")

    return props.selected
        ? <span onClick={props.onClickHandler}><b>star</b> </span>
        : <span onClick={props.onClickHandler}>star </span>


    // if (props.selected === true) {
    //     return <span><b>star</b> </span>
    // } else {
    //     return <span>star </span>;
    // }
}