import React from "react";




const Description = <div className="description"><p className = "description-text">your description will be here</p></div>
const Rainbow = <div className="rainbow"><img src = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Double-alaskan-rainbow.jpg" alt="rainbow"/></div>
const RedSquare = <div className="red-square">{Description}{Description}{Description}</div>



const About = () => (
    <div className="block about">About
        {Rainbow}
        {RedSquare}

    </div>);


export default About;
