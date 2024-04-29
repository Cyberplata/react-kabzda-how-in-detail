import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    // const collapsed = false
    let [collapsed, setCollapsed] = useState(false)

    const onClickCollapsedHandler = () => {
        return !collapsed
            ? setCollapsed(true)
            : setCollapsed(false);
        // if (!collapsed) {
        //     setCollapsed(true)
        // } else {
        //     setCollapsed(false)
        // }
    }

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={onClickCollapsedHandler}>TOGGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3>-- {props.title} --</h3>;
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;

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