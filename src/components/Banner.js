import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import person1 from "../assets/images/sliderperson1.png"
import person2 from "../assets/images/sliderperson2.png"
import person3 from "../assets/images/sliderperson3.png"
import circle from "../assets/images/Circle.png"
import arrowPrev from "../assets/images/arrowprev.png"
import arrowNext from "../assets/images/arrownext.png"


export const Banner = () => {

    const data = [
        {id:1, img: person1, title:"Start guide for beginner designers", text: "Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore ." },
        {id:2, img: person2, title:"Start guide for beginner front-end devs", text: "Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore ." },
        {id:3, img: person3, title:"Start guide for beginner back-end devs", text: "Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore ." }
    ]
    const [people] = useState(data)
    const [index, setIndex] = useState(0)

    useEffect(()=> {
        const lastIndex = people.length - 1;
        if(index < 0) setIndex(lastIndex)
        if(index > lastIndex) setIndex(0)
    }, [index, people])

    useEffect(() => {
        let slide = setInterval(()=> {
            setIndex(index + 1)
        }, 5000)
        return () => {
            clearInterval(slide)
        }

    },[index])

    return (
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
                {people.map((item, slideIndex) => {
                    const {id, img, title, text} = item
                    let position = "nextSlide"

                    if(slideIndex === index) {

                        position = "activeSlide"
                    }
                    if(slideIndex === index - 1 || (index === 0 && slideIndex === people.length - 1))
                    {
                        position = "prevSlide"

                    }
                    return (
                        <article className={position} key={id}>
                        <div className="person"><img src={img} alt=""/></div>
                            <div className="banner_info">
                                <h2 className={"banner_title"}>{item.title}</h2>
                                <p className="banner_text">{item.text}</p>
                                <div className="banner_buttons">
                                    <Button className="banner_button_one">let's start</Button>
                                    <Button className="banner_button_two">read more</Button>
                                </div>
                            </div>
                        </article>
                    )
                })}
                <img src={circle} alt="" className="circle"/>
                <button className="arrow__prev" onClick={() => setIndex(index - 1)}><img src={arrowPrev} alt=""/></button>
                <button className="arrow__next" onClick={() => setIndex(index + 1)}><img src={arrowNext} alt=""/></button>
            </div>
            <div className="edit_cont">
              <div className="edition">
                <h2>edition</h2>
                <h2 className="year">2022</h2>
              </div>
            </div>
        </div>
    );
}