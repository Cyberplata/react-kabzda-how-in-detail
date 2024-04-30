import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log("Rating rendering")

    const [rating, setRating] = useState(0)

    const onClickHandler = (value: number) => {
        // console.log('!!!!!!')
        setRating(value)
    }

    return (
        <div>
            <Star selected={rating > 0}/>
            <button onClick={() => onClickHandler(1)}>1</button>

            <Star selected={rating > 1}/>
            <button onClick={() => onClickHandler(2)}>2</button>

            <Star selected={rating > 2}/>
            <button onClick={() => onClickHandler(3)}>3</button>

            <Star selected={rating > 3}/>
            <button onClick={() => onClickHandler(4)}>4</button>

            <Star selected={rating > 4}/>
            <button onClick={() => onClickHandler(5)}>5</button>
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


// import React, { useState } from "react";
//
// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5;
// };
//
// export function UncontrolledRating(props: RatingPropsType) {
//     const [rating, setRating] = useState(0);
//
//     const handleClick = (newRating: number) => {
//         setRating(newRating);
//     };
//
//     return (
//         <div>
//             {Array(5)
//                 .fill(0)
//                 .map((_, i) => (
//                     <button key={i} onClick={() => handleClick(i + 1)}>
//                         {rating >= i + 1 ? "★" : "☆"}
//                     </button>
//                 ))}
//         </div>
//     );
// }
