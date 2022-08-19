import React from 'react';
import  ReactDOM  from 'react-dom';
import './modal.css';

const Modal = ({
    onclose,
    children
}) => {
    return ReactDOM.createPortal(
        <div className='overlay'>
            <div className='custommodal'>
                <div className='custommodal-header'>
                    <i onClick={onclose} className='fas fa-times text-align-right'></i>
                </div>
                <div className='custommodal-body'>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;