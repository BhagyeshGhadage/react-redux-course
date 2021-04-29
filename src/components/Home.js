import React, {useState, useEffect} from 'react' 
import {useDispatch, useSelector} from 'react-redux'
import { BiMinus, BiPlus } from "react-icons/bi";
import './Home.css'
import Header from './Header'
import Form from './Form'
import Cart from './Cart'
import Course from './Course'

const Home = ({props}) => {
    const getData = localStorage.getItem('userData');
    const {courses, totalcourse} = useSelector(state => state.CourseReducers)
    const [showAddBtn, setShowAddBtn] = useState(false)     
    const [isCourseAdded, setCourseAdded] = useState(false)
    const [searchItem, setSearchItem] = useState("")
    const dispatch = useDispatch()
        
    return (
        <div>
            <Header/>
            { !getData && (<Form />)}
            <div className = "home">
                <div className = "input-text">
                    <input type = "text" placeholder = "Search.." onChange = {(event) =>{
                        setSearchItem(event.target.value)
                    }} />
                </div>
                <div className = "row">                    
                    {courses.filter((val)=>{
                         if(searchItem == "")  {
                           return val
                         }else if(val.duration.toLowerCase().includes(searchItem.toLowerCase()) || val.publishDate.toLowerCase().includes(searchItem.toLowerCase())){
                             return val
                         }
                    }).map((course, index) => (        
                        <button className = "add-btn" key = {course.id}
                            onMouseEnter={() => { 
                                const check = totalcourse.find(cr => cr.id == Number(course.id))                                  
                                 setCourseAdded(false)                 
                                 if(check !== undefined){
                                     setCourseAdded(true)                
                                 } 
                            }}                                                        
                        >   
                            <div className = "col" >
                                <Course props = {course} />                                        
                                <div className = {'add-plus-btn'}>
                                    {!isCourseAdded ?  
                                        (<span className = "icon"  onClick={() =>                                
                                            dispatch({type: 'ADD_TO_CART', payload:{course}}
                                        )}><BiPlus/></span>) : 
                                        (<span className = "icon"  onClick={() =>                                
                                            dispatch({type: 'REMOVE_TO_CART', payload:course.id}
                                        )}><BiMinus/> </span>)
                                    }
                                </div>                                
                            </div> 
                        </button>                      
                    ))}                                     
                 </div>
                  {totalcourse.length >0 && <Cart/>}  
            </div>            
        </div>
    )
}

export default Home