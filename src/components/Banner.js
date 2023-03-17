import React from "react";
import person1 from "../assets/images/sliderperson1.png"
import person2 from "../assets/images/sliderperson2.png"
import person3 from "../assets/images/sliderperson3.png"
import circle from "../assets/images/Circle.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button} from "react-bootstrap";



export const Banner = () => {

    return (
        <>
        <div className="banner">
            <div className="ui">
                <h1 className="ui_text">UI< font color="#a460f9">.</font></h1>
                <div className="beginners">
                <h2 className="beginner">Beginner</h2>
                <h2 className="s">'s</h2>
                </div>
            </div>
            <div className="dot_des">
                  <div className="cont"></div>
                  <div className="pro">become a<br/> pro-designer</div>
            </div>
           <div className="person_outer">
               <div className="person"><img src={person1} alt=""/></div>
                <img src={circle} alt="" className="circle"/>
            </div>
            <div className="banner_info">
                <h2 className={"banner_title"}>Start guide for beginner designers</h2>
                <p className="banner_text">Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore .</p>
                <div className="banner_buttons">
                    <Button className="banner_button_one">let's start</Button>
                    <Button className="banner_button_two">read more</Button>
                </div>
            </div>
            <div className="edit_cont">
              <div className="edition">
                <h2>edition</h2>
                <h2 className="year">2022</h2>
              </div>
            </div>
        </div>

        </>
    );
}