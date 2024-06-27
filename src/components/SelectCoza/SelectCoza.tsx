// Select.tsx
import React, { useState } from 'react';
import './SelectCoza.css';

interface Option {
    value: string;
    label: string;
}

interface SelectCozaProps {
    options: Option[];
    onSelect: (value: string) => void;
    selectedValue: string;
}

const SelectCoza: React.FC<SelectCozaProps> = ({ options, onSelect, selectedValue }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: string) => {
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <div className="select-container">
            <div className="select-header" onClick={() => setIsOpen(!isOpen)}>
                {selectedValue ? options.find(option => option.value === selectedValue)?.label : 'Select...'}
            </div>
            {isOpen && (
                <div className="select-options">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className="select-option"
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectCoza;