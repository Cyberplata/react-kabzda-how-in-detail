import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

// function declaration
function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState(false) // hook with init value

    return (
        <div className={"App"}>

            <OnOff value={on} onClick={setOn}/>
            <br/>
            <UncontrolledOnOff />

            {/*<Rating value={ratingValue}*/}
            {/*        onClick={setRatingValue}*/}
            {/*/>*/}
            {/*<UncontrolledRating />*/}

            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={setAccordionCollapsed}*/}
            {/*/>*/}



            {/*<OnOff/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
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
