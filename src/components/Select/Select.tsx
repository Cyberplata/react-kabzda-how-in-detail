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

    const toggleItems = () => setActive(!active)
    // const itemClicked = (value: any) => props.onChange(props.value)

    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>

            <div className={styles.select}>
                <span
                    className={styles.main}
                    onClick={toggleItems}>{selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onClick={() => {props.onChange(i.value)}}
                            key={i.value}>{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
}