import React from "react";
import { Link } from "gatsby";
import Header from "../components/header.js"

export default () => (
  <div>
    <Link to="/">Blog</Link>
    <Link to="/cv/">CV</Link>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Contact!" />
    <Header headerText="Send me a message!" />
  </div>
)