import React from "react";
import person1 from "../assets/images/feedback person 1.png"
import person2 from "../assets/images/feedback person 2.png"
import person3 from "../assets/images/feedback person 3.png"
import person4 from "../assets/images/person 4.jpg"
import person5 from "../assets/images/feedback person 5.jpg"
import rating from "../assets/images/rating.png"
import Slider from "react-slick";
import FeedbackCard from "./FeedbackSlick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Feedback = () => {
    const clients = [
        {
            id: 1,
            clientPfp: person1,
            name: "laura smith",
            rating: rating,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            clientPfp: person2,
            name: "john smith",
            rating: rating,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 3,
            clientPfp: person3,
            name: "sara smith",
            rating: rating,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 4,
            clientPfp: person4,
            name: "brad smith",
            rating: rating,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 5,
            clientPfp: person5,
            name: "sam smith",
            rating: rating,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="feedback__outer__text">
                <p className="feedback__outer__text__pt1">what</p>
                <p className="feedback__outer__text__pt2">users think.</p>
            </div>
            <div className="feedbacks">
                <Slider {...settings}>
                    {clients.map((client) => <FeedbackCard client = {client}/>)}
                </Slider>
            </div>
        </>
    )
}
