import React from 'react';

type PropsType = {
    value: boolean
    onClick: (value: boolean) => void
}
function OnOff(props: PropsType) {
    console.log("OnOff rendering")

    console.log("on:", props.value)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.value ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.value ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle}
                 onClick={ () => {props.onClick(!props.value)} }>On</div>
            <div style={offStyle}
                 onClick={ () => {props.onClick(!props.value)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff


// ---------------------------------------------------------------------------------------
// type OnOffPropsType = {
//     valueButton: boolean
// }
//
// export const OnOff = (props: OnOffPropsType) => {
//     return (
//         <div className={"onOff"}>
//             <button className={props.valueButton ? "on" : "off"}>on</button>
//             <button className={!props.valueButton ? "on" : "off"}>off</button>
//             <span className="circle" style={{borderColor: props.valueButton ? "green" : "red"}}></span>
//
//             {/*{ props.valueButton && }*/}
//         </div>
//     );
// };