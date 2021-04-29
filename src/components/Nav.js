import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import {useSelector} from 'react-redux'
import './Nav.css'

const Nav = () =>{
    const {totalcourse} = useSelector(state => state.CourseReducers)
    return (
        <div className = "nav">
            <div className="main-container"> 
                <div className = "nav-container">
                    <div className = "nav-left">
                        <Link to ="/">
                            <img src = "/images/logo.jpg" className = "logo" alt= ""/>
                        </Link>    
                    </div>
                    <div className = "nav-right">  
                        <div className = "basket">
                            <BsFillBagFill className = "cart-icon"/>
                            <span>{totalcourse.length}</span>
                        </div>   
                    </div>
                </div>  
            </div>    
        </div>    
    )
}

export default Nav