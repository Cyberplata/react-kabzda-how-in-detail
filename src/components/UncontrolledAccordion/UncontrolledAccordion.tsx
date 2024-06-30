import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    console.log("REDUCER START:")
    console.log(state)
    console.log(action)
    console.log("REDUCER END:")

    if (action.type === "TOGGLE-COLLAPSED") {
        return !state
    }

    return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    // let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)

    return <div>
        {/*<AccordionTitle title={props.titleValue}*/}
        {/*                onClick={() => setCollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.titleValue}
                        onClick={ () => {
                            dispatch({type: "TOGGLE-COLLAPSED"})} }
        />
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendering")
    return <h3 onClick={ () => {props.onClick()} }>-- {props.title} --</h3>;
}

function AccordionBody() {
    console.log("UncontrolledAccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

// -----------------------------------------------------------------------------------------------
// function Accordion2(props: AccordionPropsType) {
//     // console.log("Accordion rendering")
//
//     if (!props.collapsed) {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody/>
//         </div>
//     } else {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     }
// }