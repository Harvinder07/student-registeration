import React, { memo } from 'react';

const TextInput = ({
    label,
    name,
    inputType,
    changed,
    placeholder,
    maxlength,
    inputValue
}) => {
    return(
        <div className='mb-3'>
            <label className='label'>{label}</label>
            <input 
                type={inputType} 
                name={name}
                onChange={changed} 
                placeholder={placeholder}
                value={inputValue}
                className="form-control"
                maxLength={maxlength}
            />
        </div>
    )
}

export default memo(TextInput);