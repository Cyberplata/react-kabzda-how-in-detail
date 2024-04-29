import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")

    const [value, setValue] = useState(0)
    const [selected, setSelected] = useState(true)

    const onClickHandler = () => {
        // console.log('!!!!!!')
        if (value > 0) {
            setValue(0)
        }
        if (value > 1) {
            setValue(1)
        }
        if (value > 2) {
            setValue(2)
        }
        if (value > 3) {
            setValue(3)
        }
        if (value > 4) {
            setValue(4)
        }
    }

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={onClickHandler}>1</button>

            <Star selected={value > 1}/>
            <button onClick={onClickHandler}>2</button>

            <Star selected={value > 2}/>
            <button onClick={onClickHandler}>3</button>

            <Star selected={value > 3}/>
            <button onClick={onClickHandler}>4</button>

            <Star selected={value > 4}/>
            <button onClick={onClickHandler}>5</button>
        </div>
    );

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    // const [selected, setSelected] = useState(true)

    // console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>;
    }
}