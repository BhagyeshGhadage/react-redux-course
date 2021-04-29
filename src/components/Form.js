import React, {useState} from 'react' 
import LogIn from './LogIn'
import './Form.css';
 
const Form = ({modalclose}) => {
    const getData = localStorage.getItem('userData');

    return (
        <div className="form-wrapper">
            <div className="form-container">                 
                <LogIn />
            </div>
        </div>
    )
}

export default Form
