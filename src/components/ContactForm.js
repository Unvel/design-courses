import React from "react";
import person from "../assets/images/ContactFormPerson.png"
import {Button} from "react-bootstrap";



export const ContactForm = () => {

    return(
        <div className="ContactForm">
            <a name={"blog"}></a>
            <div className="ContactFormPerson">
                <img src={person} alt="" width={750}   />
            </div>
            <div className="ContactForm__Form">
                <p className="ContactForm__subscribe">subscribe</p>
                <p className="ContactForm__newsletter">to our newsletter</p>
                <p className="ContactForm__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt .</p>
                <div className="ContactForm__textField">
                <input type="text" placeholder="NAME" className="ContactForm__Input nameInput"/>
                <input type="email" placeholder="MAIL" className="ContactForm__Input mailInput"/>
                    <textarea name="message" id="message" placeholder="MESSAGE" cols="30" rows="6" className="ContactForm__Input messageInput"></textarea>
                    <Button className="button ContactForm__button">send message</Button>
                </div>
            </div>
        </div>
    )
}