import React, {useState} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)

    const selectedItem = props.items.find(i => i.value === props.value)

    const onClickHandler = () => {
        setActive(!active)
    }

    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>

            <div className={styles.select + " " + (active ? styles.active : "")}>
                <h3 onClick={onClickHandler}>{selectedItem && selectedItem.title}</h3>
                <div className={styles.items}>
                    {props.items.map(i => <div onClick={() => {alert(`hello!!!`)}} key={i.value}>{i.title}</div>)}
                </div>
            </div>
        </>
    );
}