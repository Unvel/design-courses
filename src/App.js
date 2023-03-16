import './App.css';
import React from "react";
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Stats} from "./components/Stats";
import {Challenges} from "./components/Challenges";
import {Courses} from "./components/Courses";
import {About} from "./components/About";
import {Video} from "./components/Video";
import {Feedback} from "./components/Feedback";
import {ContactForm} from "./components/ContactForm";
import {Footer} from "./components/Footer";


function App() {
  return (
    <div className="App">
        <a name="home"></a>
        <NavBar/>
        <Banner/>
        <Stats/>
        <Challenges/>
        <Courses/>
        <About/>
        <Video/>
        <Feedback/>
        <ContactForm/>
        <Footer/>
    </div>
  );
}
export default App;
