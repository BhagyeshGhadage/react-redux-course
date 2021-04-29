import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { MdAccountBox } from "react-icons/md";
import { BsLockFill, BsPersonFill } from "react-icons/bs"

const LogIn = () => {
    const getData = localStorage.getItem('userData')
    const getObj = JSON.parse(getData)
    const history = useHistory()
    const [UserData, setUserData] = useState({ logName: "", logPassword: "" })
    const [errors, setErrors] = useState(false)   
    const [isSubmitted, setSubmitted] = useState(false)

    const handleInput = (e) => {
        setUserData({ ...UserData, [e.target.name]: e.target.value })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (UserData.logName !== "" &&  UserData.logPassword !== "") {           
            setSubmitted(true)
            setErrors(false)
            localStorage.setItem('userData', JSON.stringify(UserData))
            setTimeout(() =>
                history.push("/"),
                  2000
              );            
            
        } else {
            setErrors(true)
        }
    }
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="item-data">
                    <div className="icon"><MdAccountBox /></div>
                    <label htmlFor="logName">User name</label>
                    <div className="item-input">
                        <div className="item-icon">
                            <span className="input-icon"><BsPersonFill /></span>
                        </div>
                        <input type="text" autoComplete="off" className="input-field"
                            name="logName"
                            id="logName"
                            value={UserData.logName}
                            onChange={handleInput}
                            disabled={isSubmitted}
                        />
                    </div>
                </div>
                <div className="item-data">
                    <label htmlFor="logPassword">Password</label>
                    <div className="item-input">
                        <div className="item-icon">
                            <span className="input-icon"><BsLockFill /></span>
                        </div>
                        <input type="password" autoComplete="off" className="input-field"
                            name="logPassword"
                            id="logPassword"
                            value={UserData.logPassword}
                            onChange={handleInput}
                            disabled={isSubmitted}
                        />
                    </div>
                    {errors && <p className="error">Please enter the required field.</p>}
                </div>
                <button className="btn" disabled = {isSubmitted} >Login</button>
                {getData && isSubmitted && <p className = "message"> You have successfully logged. </p>}
            </form>
        </div>
    )
}

export default LogIn
