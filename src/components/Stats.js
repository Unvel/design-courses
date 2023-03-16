import React from "react";

export const Stats = () => {

    return(
        <div className="stats">
            <div className="container">

                <section className="stats__section">
                    <div className="stats__section__content">
                        <p className="number"><font color="#a460f9">+</font>150</p>
                        <p className="stats__infoText">Happy<span className="stats__infoText weight"> students</span></p>
                    </div>
                </section>
                <section className="stats__section">
                    <div className="stats__section__content">
                        <p className="number"><font color="#a460f9">+</font>50</p>
                        <p className="stats__infoText">Certified<span className="stats__infoText weight"> courses</span></p>
                    </div>
                </section>
                <section className="stats__section">
                    <div className="stats__section__content">
                        <p className="number"><font color="#a460f9">+</font>1000</p>
                        <p className="stats__infoText">awards<span className="stats__infoText weight"> received</span></p>
                    </div>
                </section>
            </div>
        </div>
    )
}