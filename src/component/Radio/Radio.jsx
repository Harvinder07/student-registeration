import React from 'react';
import './radio.css'

const Radio = ({
    name,
    value,
    options,
    selected,
    changed
}) => {
    return(
        <div className='d-flex gap20'>
            {options.map((item) => (
                <div>
                    <input 
                        id={item}
                        name={name}
                        type="radio" 
                        value={item}
                        onChange={changed}
                        checked={item === selected}
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}   
        </div>
    )
}

export default Radio;