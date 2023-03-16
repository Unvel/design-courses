import React from 'react';
import quote1 from "../assets/images/Quote 1.png";
import quote2 from "../assets/images/Quote 2.png";

const FeedbackCard = (props) => {

    return (
        <div className="feedback__card">
            <div className="feedback__card__image">
                <img height="200px" width="200px" src={props.client.clientPfp} alt=""/>
            </div>
            <p className="feedback__card__clientName">{props.client.name}</p>
            <img src={props.client.rating} alt={"person " + props.client.id}
                 className="feedback__card__rating"/>
            <p className="feedback__card__text"><span><img src={quote1} alt=""
                                                           className="feedback__card__quote"/></span> {props.client.text}
                <span><img src={quote2} alt="" className="feedback__card__quote"/></span></p>
        </div>
    );
};

export default FeedbackCard;