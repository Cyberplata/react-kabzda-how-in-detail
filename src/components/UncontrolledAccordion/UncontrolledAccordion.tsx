import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <MemoizedUncontrolledAccordionTitle title={props.titleValue}
                        onClick={() => {
                            dispatch({type: TOGGLE_COLLAPSED})
                        }}
        />
        {!state.collapsed && <MemoizedUncontrolledAccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendering")
    return <h3 onClick={() => {
        props.onClick()
    }}>-- {props.title} --</h3>;
}
const MemoizedUncontrolledAccordionTitle = React.memo(UncontrolledAccordionTitle)

function UncontrolledAccordionBody() {
    console.log("UncontrolledAccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
const MemoizedUncontrolledAccordionBody = React.memo(UncontrolledAccordionBody)