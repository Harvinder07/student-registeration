import React, { memo } from 'react';
import './button.css';

const Button = ({
    btnType,
    clicked,
    variant,
    text,
    width
}) => {
    return(
        <>
            <button 
                type={btnType}
                onClick={clicked}
                className= {`${variant} ${width}`}
            >{text}</button>
        </>
    )
}

export default memo(Button);