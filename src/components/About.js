import React from "react";
import {Button} from "react-bootstrap";
import person from "../assets/images/person.png"
import person2 from "../assets/images/person2.png"


export const About = () => {
    return(
        <>
            <div className="about">
                <a name="about"></a>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="about__content">
                    <div className="about__content__info">
                        <p className="about__content__info__title">About <span className="about__content__info__title__us">us.</span></p>
                        <p className="about__content__info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse.</p>
                        <div className="about__content__info__points">
                            <div className="about__content__info__points__row">
                                <div className="point__one">
                                    <div className="point__dot"></div>
                                    <div className="point__one__text">Lorem ipsum dolor.</div>
                                </div>
                                <div className="point__two">
                                    <div className="point__dot"></div>
                                    <div className="point__two__text">Lorem ipsum dolor.</div>
                                </div>
                            </div>
                            <div className="about__content__info__points__row">
                                <div className="point__one">
                                    <div className="point__dot"></div>
                                    <div className="point__three__text">Lorem ipsum dolor.</div>
                                </div>
                                <div className="point__two">
                                    <div className="point__dot"></div>
                                    <div className="point__four__text">Lorem ipsum dolor.</div>
                                </div>
                            </div>
                            <Button className="button ">Read More</Button>
                        </div>
                    </div>
                    <img className="about__content__person" src={person} alt=""/>
                </div>
            </div>
            <div className="about__margin"></div>
            <div className="about">
                <div className="circle5"></div>
                <div className="circle4"></div>
                <div className="circle3"></div>
                <div className="about__content ">
                    <img className="about__content__person2" src={person2} alt=""/>
                    <div className="about__content__info about__content__second">
                        <p className="about__content__info__title">Why <span className="about__content__info__title__us">us.</span></p>
                        <p className="about__content__info__text about__text__second">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse.</p>
                        <Button className="button about__button">Read More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}