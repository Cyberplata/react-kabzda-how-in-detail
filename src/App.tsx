import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";



// function declaration
function App(props: any) {
    // полезное что-то
    // обязана вернуть JSX
    console.log("App rendering")
    return (
        <div className={"App"}>
            <OnOff/>

            <UncontrolledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}

            <UncontrolledRating/>
            {/*<Rating value={1}/>*/}
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
