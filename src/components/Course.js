import React from 'react'
 
const Course = ({props}) =>{ 
    return (
        <div className = "course">
            <div className = "course-img">
                <img src = {props.image} alt = {props.name}/> 
            </div>
            <div className = "course-details">                 
                <p className = "name"> {props.name}</p>
                <p className = "description"><span>{props.description}</span></p>
                <p className = "author">{props.author}</p>
                <p className = "publishDate">{props.publishDate}</p>
                <p className = "duration">{props.duration}</p>      
            </div>                
        </div> 
    )
}

export default Course
 