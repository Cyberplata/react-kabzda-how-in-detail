import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";



// function declaration
function App(props: any) {
    // полезное что-то
    // обязана вернуть JSX
    console.log("App rendering")
    return (
        <div>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>

            <UncontrolledRating />
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
