import React from 'react';

const CustomTimestampInput = ({ value, onChange }) => {
    const handleInputChange = (e, unit) => {
        const newValue = { ...value, [unit]: e.target.value };
        onChange(newValue);
    };

    const formatUnit = (unit, length) => unit.toString().padStart(length, '0');

    return (
        <div>
            <input
                type="number"
                value={formatUnit(value.hours, 2)}
                onChange={(e) => handleInputChange(e, 'hours')}
                min="0"
                max="23"
            />:
            <input
                type="number"
                value={formatUnit(value.minutes, 2)}
                onChange={(e) => handleInputChange(e, 'minutes')}
                min="0"
                max="59"
            />:
            <input
                type="number"
                value={formatUnit(value.seconds, 2)}
                onChange={(e) => handleInputChange(e, 'seconds')}
                min="0"
                max="59"
            />.
            <input
                type="number"
                value={formatUnit(value.milliseconds, 3)}
                onChange={(e) => handleInputChange(e, 'milliseconds')}
                min="0"
                max="999"
            />
        </div>
    );
};

export default CustomTimestampInput;