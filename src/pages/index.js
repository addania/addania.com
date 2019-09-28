import React from "react";
import { Link } from "gatsby";
import Header from "../components/header.js";
// import "../styles/global.css"
export default () => (
  <div style ={{color: "purple"}}>
    <div>
    <Header headerText="Adda"/>
      <nav>
        <a href="">Blog</a>| 
        <a href="/cv/">CV</a>| 
        <a href="/about/">About</a>| 
        <a href="/contact/">Contact</a>
      </nav>
      <Link to="/">Blog</Link>
      <Link to="/cv/">CV</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/about-css-modules/">Contact</Link>
    </div>
    <div>
      <p>Welcome to my Universe</p>
      <img src="./pics/blogHeader.jpg" width= "300px"/>
    </div>
  </div>

)
