import React from "react";
import {Button} from "react-bootstrap";
import arrow from "../assets/images/arrownext.png"

export const Courses = () => {

    const courses = [
        {cardNum: ".01", courseNum: "01", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci-didunt ut labore et."},
        {cardNum: ".02", courseNum: "02", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci-didunt ut labore et."},
        {cardNum: ".03", courseNum: "03", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci-didunt ut labore et."},
        {cardNum: ".04", courseNum: "04", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci-didunt ut labore et."}
    ]

    return (
        <>
            <a name={"courses"}></a>
            <div className="courses__title">
                <span className="find__text">find</span>
                <span className="yourCourse__text">Your Course.</span>
                <div className="course__edition">
                    <div className="course__cont"></div>
                    <div className="edition">
                        <h2>edition</h2>
                        <h2 className="year">2022</h2>
                    </div>
                </div>
            </div>
            <div className="courses">
                {courses.map(course =>
                    <div className="courses__card">
                        <div className="courses__card__content"><span className="courses__card__num">{course.cardNum}</span></div>
                        <p className="courses__card__title">Course < font color="#a460f9">{course.courseNum}</font></p>
                        <div className="courses__card__line"></div>
                        <p className="courses__card__description">{course.description}</p>
                        <Button className="button">Read more</Button>
                    </div>
                    )}
            </div>
                <div className="courses__more">
                    <p className="courses__more__text">more courses</p>
                    <a href="#"> <img className="courses__more__arrow" src={arrow} alt="arrow"/></a>
                </div>
            </>
    )}

