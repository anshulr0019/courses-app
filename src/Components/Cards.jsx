import Card from "./Card";
import React, { useState } from 'react'

const Cards = ({courses}) => {
    let allCourses = [];
    const getCourses = () => {
        Object.values(courses).forEach( (coursesCategory) => {
            coursesCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    return (
        <div>
            {!courses ? (
                <div>
                    <p>NO data found</p>
            ) : (getCourses().map( (course) => {
                    return <Card key={course.id} course={course}/>
                }))}
        </div>
        );
};

export default Cards;
