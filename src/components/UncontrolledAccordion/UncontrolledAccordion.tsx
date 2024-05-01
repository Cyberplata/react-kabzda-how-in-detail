import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(false)

    const handlerAccordionTitle = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle title={props.titleValue}
                        onClickH3Handler={handlerAccordionTitle}/>
        {/*<button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClickH3Handler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onClickH3Handler}>-- {props.title} --</h3>;
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