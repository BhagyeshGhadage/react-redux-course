import React from 'react'
import {useSelector} from 'react-redux'
import './Cart.css';
import Course from './Course'

const Cart = () =>{
    const {totalcourse} = useSelector(state => state.CourseReducers)
    return (
        <div className = "cart">             
            <div className = "row">    
                <h1>Cart</h1>
                {(totalcourse.length > 0) && totalcourse.map((course, index) => (  
                    <div className = "col" key = {index}>
                        <div className = "course">
                            <Course props = {course} />                                  
                        </div> 
                    </div>     
                ))}                    
            </div>            
        </div>        
    )
}

export default Cart