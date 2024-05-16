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
            <Star selected={value > 0}
                  onClickSpanHandler={() => handleStarClick(1)}/>

            <Star selected={value > 1}
                  onClickSpanHandler={() => handleStarClick(2)}/>

            <Star selected={value > 2}
                  onClickSpanHandler={() => handleStarClick(3)}/>

            <Star selected={value > 3}
                  onClickSpanHandler={() => handleStarClick(4)}/>

            <Star selected={value > 4}
                  onClickSpanHandler={() => handleStarClick(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    // onClickSpanHandler: () => void
}

function Star(props: StarPropsType) {
    // console.log("Star rendering")

    // return props.selected
    //     ? <span onClick={props.onClickSpanHandler}><b>star</b> </span>
    //     : <span onClick={props.onClickSpanHandler}>star </span>

    return <span>
        { props.selected ? <b>star</b> : "star" }
    </span>

    // if (props.selected === true) {
    //     return <span><b>star</b> </span>
    // } else {
    //     return <span>star </span>;
    // }
}