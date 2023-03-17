import React, {useState} from "react";
import {Nav, Navbar, Container, Button} from "react-bootstrap"
import logo from '../assets/images/Logo.png'
import closebtn from "../assets/images/cancel.png"


export const NavBar = () => {

    const [btnState, setBtnState] = useState(false)
    const [signed, setSigned] = useState(false)
    const toggledModal = btnState ? 'modal__outer open' : 'modal__outer hidden'
    const isSigned = signed ? 'sign__text' : 'sign__text hidden'
    const buttonHandler = () => {
        setBtnState(true)
    }
    const ModalCloseHandler = () => {
        setBtnState(false)
        setSigned(false)
    }
    const ModalSignUpHandler = () => {
        setSigned(true)
    }

    const Modal = () => {
        return (
            <div className={toggledModal} onClick={ModalCloseHandler}>
                <div className="modal__inner" onClick= {e => e.stopPropagation()}>
                    <div className="modal__header">
                        <h4 className="modal__title">sign in</h4>
                        <button className={"closeButton"} onClick={ModalCloseHandler}><img height={32} width={32} src={closebtn} alt=""/> </button>
                    </div>
                    <div className="modal__body">
                        <input type="text" placeholder="NAME" className="ContactForm__Input nameInput"/>
                        <input type="email" placeholder="MAIL" className="ContactForm__Input mailInput"/>
                        <Button className="button ContactForm__button" onClick={ModalSignUpHandler}>sign in</Button>
                        <p className={isSigned}>Thank You for signing in! You're welcome in our community!</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <Navbar>
            <Modal/>
            <Container>
                        <Navbar.Brand href="#home">
                          <img src={logo} alt="Logo"/>
                        </Navbar.Brand>
                         <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">about</Nav.Link>
                            <Nav.Link href="#courses">courses</Nav.Link>
                            <Nav.Link href="#blog">blog</Nav.Link>
                         </Nav>
                         <Button onClick={buttonHandler}>Sign in</Button>
            </Container>
        </Navbar>
    )
}
