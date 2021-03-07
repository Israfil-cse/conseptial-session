import React, { useState } from 'react';

const CourseDataShow = (props) => {
    const data = props.coursedata;
    const {CourseName,Coursefree,image,trainer} = data;
    const handleClick = props.datapass;


    // dubble add handle  
    const [isClicked , setIsClicked] = useState(false);

    return (
        <div>
            <img className="courseImg" src={image} alt=""/>

            <h1>Course Name: {CourseName}</h1>
            <h1>Course Price: {Coursefree}</h1>
            <h1>Trainer: {trainer}</h1>

            <button onClick={() =>{
                handleClick(data) 
                setIsClicked(true)
            }} className="btn-success">
               {isClicked ? "AlL ready data added" : "Enroll now"}
               
                </button>
        </div>
    );
};

export default CourseDataShow;