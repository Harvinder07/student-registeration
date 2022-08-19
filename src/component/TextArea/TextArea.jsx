import React from 'react';

const TextArea = ({
    label,
    value,
    changed,
    name,
    placeholder
}) => {
    return(
        <div className='form-group'>
            <label>{label}</label>
            <textarea 
                name={name}
                placeholder={placeholder} 
                onChange={changed} 
                value={value} 
                className="form-control"
            />
        </div>
    )
}

export default TextArea;