import React, { memo } from 'react';
import './button.css';

const Button = ({
    btnType,
    clicked,
    variant,
    text
}) => {
    return(
        <>
            <button 
                type={btnType}
                onClick={clicked}
                className= {variant}
            >{text}</button>
        </>
    )
}

export default memo(Button);