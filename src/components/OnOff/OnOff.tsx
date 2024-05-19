import React from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}
function OnOff(props: PropsType) {
    console.log("OnOff rendering")

    console.log("on:", props.on)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle}
                 onClick={ () => {props.onChange(true)} }>On</div>
            <div style={offStyle}
                 onClick={ () => {props.onChange(false)} }>Off</div>
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