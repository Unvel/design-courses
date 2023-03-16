import React from "react";
import circle from "../assets/images/Circle 1 .png"
import arrow from "../assets/images/Arrow.png"

export const Challenges = () => {
    return(
        <>
        <div className="challenges">
            <img src={circle} alt="" className={"challenges__circle"}/>
                <div>
                    <span className="challenges__text weight">accept</span>
                    <div className="challenges__text ">new</div>
                    <span className="challenges__text weight">challenges</span>
                </div>
            <div className="challenges__skillsBlock">
                <div className="challenges__cont"></div>
                <div className="challenges__skillsText"> discover your skills</div>
            </div>
            <div className="challenges__skillsBlock__second">
                <div className="challenges__cont"></div>
                <div className="challenges__skillsText"> discover your skills</div>
            </div>
        </div>
          <div className="challenges__banner">
              <div className="challenges__info explore">explore</div>
              <a className="challenges__arrowDown" href="#courses"><img src={arrow} alt="ArrowDown"/></a>
              <div className="challenges__info about">about</div>
          </div>
        </>
    )
}