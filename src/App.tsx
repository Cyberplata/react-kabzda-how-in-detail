import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";

// function declaration
function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={"App"}>

            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />



            {/*<OnOff/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}

            {/*<UncontrolledRating/>*/}


            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}


            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    // console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
