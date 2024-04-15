import React from 'react';

type OnOffPropsType = {
    valueButton: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={"onOff"}>
            <button className={props.valueButton ? "on" : "off"}>on</button>
            <button className={!props.valueButton ? "on" : "off"}>off</button>
            <span className="circle" style={{borderColor: props.valueButton ? "green" : "red"}}></span>

            {/*{ props.valueButton && }*/}
        </div>
    );
};