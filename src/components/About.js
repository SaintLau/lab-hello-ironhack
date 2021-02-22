import React from 'react';
import './About.css';

function About() {
    return (
    <div>
            <div className="top">
                 <img src="public/images/ironhack-logo.svg" />
                 <div className="top-text">

                 <h1 className="title"> Say hello to ReactJS </h1>
                 <p>You will learn how to use the most popular frontend library, and become a super Ninja developer. </p>
                    <button className="button"> Awesome! </button>
                </div>
            </div>

    <div className="wrapper">
        <div className="container">
            <div className="row global-row">


            <div className="col-sm-3 column-sizer">
                <div className="icon1">
                    <img src="public/images/icon1.png" className="icons"/>
                    <h3><b>Declarative</b></h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>

                 <div className="col-sm-3 column-sizer">
                    <img src="public/images/icon2.png" className="icons"/>
                    <h3><b>Components</b></h3>
                    <p>Build encapsulated components that manage their state</p>

                 </div>

                 <div className="col-sm-3 column-sizer">
                    <img src="public/images/icon3.png" className="icons"/>
                    <h3><b>Single-Way</b></h3>
                    <p>A set of immutable values are passed to the component's</p>

                 </div>

                 <div className="col-sm-3 column-sizer">
                    <img src="public/images/icon4.png" className="icons"/>
                    <h3><b>JSX</b></h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                 </div>

            </div>

         </div>
       </div>           
    </div>

  </div>
        
   )
}

export default About;