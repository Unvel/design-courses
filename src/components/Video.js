import React, {useState} from "react";
import Preview from "../assets/images/Preview.png"
import startright from "../assets/images/readytogetstarted.jpg"
import startleft from "../assets/images/readytogetstarted2.jpg"


export const Video = () => {

    const [btnState, setBtnState] = useState(false)
    const [play, setPlay] = useState(false);
    const url = play
        ? `https://www.youtube.com/embed/zWogY-237F0?autoplay=1`
        : `https://www.youtube.com/embed/zWogY-237F0`;
    const toggleVideo = btnState ? 'toggled' : 'toggled hidden'
    const handleClick = () => {
        setBtnState(true)
        setPlay(true)
    }
    return (
        <>
         <div className="video">
             <img src={startleft} alt="" className="video__startLeft"/>
            <div className="preview" onClick={handleClick}><img src={Preview} alt=""/></div>
             <iframe width="1045" height="607" src={url}
                     title="GONE.Fludd - ПУСТОТА [prod. by LOSTSVUND]" frameBorder="0"
                     allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen className={toggleVideo} >
             </iframe>
             <img src={startright} alt="" className="video__startLeft"/>
         </div>
        </>
    )
}