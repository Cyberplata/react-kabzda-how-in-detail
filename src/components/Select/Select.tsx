import React, {KeyboardEvent, useEffect, useState} from "react";
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

// Мы создали новый компонент SelectItem, который принимает item, onMouseEnter, onClick и selected как пропсы.
// Этот компонент отвечает за рендеринг одного элемента списка.
// Обернули SelectItem в React.memo, чтобы предотвратить его повторный рендеринг, если пропсы не изменились.
// В компоненте Select мы теперь используем SelectItem для рендеринга каждого элемента списка.
const SelectItem = React.memo(({ item, onMouseEnter, onClick, selected }: {
    item: ItemType,
    onMouseEnter: () => void,
    onClick: () => void,
    selected: boolean
}) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            className={`${styles.item} ${selected ? styles.selected : ""}`}
            onClick={onClick}
        >
            {item.title}
        </div>
    );
});

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            // console.log(selectedItem)
            // console.log(hoveredItem)
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = event.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }

        if (event.key === "Enter" || event.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>

            <div className={styles.select}
                 onKeyUp={onKeyUp}
                 tabIndex={0}
            >
                <span
                    className={styles.main}
                    onClick={toggleItems}
                >
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => (
                            <SelectItem
                                key={i.value}
                                item={i}
                                onMouseEnter={() => setHoveredElementValue(i.value)}
                                onClick={() => onItemClick(i.value)}
                                selected={hoveredItem === i}
                            />
                        ))}
                    </div>
                }
            </div>
        </>
    );
}