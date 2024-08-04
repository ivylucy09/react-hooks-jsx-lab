import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
{/*<div>About</div>;*/}
<h2>About Me</h2>
<p>Welcome to JSX lab. We are learning to code</p>
<img src= {image} alt= "I made this"/>
</div>
);
}

export default About;
