import React from "react";
import {Button} from "react-bootstrap";
import facebook from "../assets/images/facebook.png"
import youtube from "../assets/images/youtube.png"
import instagram from "../assets/images/inst.png"

export const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__content">
                <div className="footer__column">
                     <ul className="footer__list">About</ul>
                     <a  href="#" className="footer__list__point">History</a>
                     <a  href="#" className="footer__list__point">Our Team</a>
                     <a  href="#" className="footer__list__point">Mission Statement</a>
                     <a  href="#" className="footer__list__point">Terms & Condition</a>
                     <a  href="#" className="footer__list__point">Privacy Policy</a>
                 </div>
                <div className="footer__column2">
                     <ul className="footer__list second">What we do</ul>
                     <a  href="#" className="footer__list__point">News and stories</a>
                     <a  href="#" className="footer__list__point">Publications</a>
                     <a  href="#" className="footer__list__point">Take action</a>
                     <a  href="#" className="footer__list__point">Recommendations</a>
                     <a  href="#" className="footer__list__point">Help</a>
                 </div>
                <div className="footer__column3">
                    <p className="footer__signUp">Sign Up To Receive  <br/> __ Our Newsletter </p>
                    <input type="email" placeholder="MAIL" className="footer__Input mailInput"/>
                    <Button className="button footer__button">sign up</Button>
                </div>
            </div>
            <div className="footer__social__media">
                <span className="footer__follow">Follow us!</span>
                <a href="#" className="social__icon"><img src={facebook} alt=""/></a>
                <a href="#" className="social__icon"><img src={instagram} alt=""/></a>
                <a href="#" className="social__icon"><img src={youtube} alt=""/></a>
            </div>
        </div>
    )
}

































