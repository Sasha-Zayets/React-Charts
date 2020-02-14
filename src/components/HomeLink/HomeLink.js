import React from "react";
import { Link } from "react-router-dom";
import "./homeLink.css";

const HomeLink = () => (
  <Link to="/" className="home-link-a">
    Home Page
  </Link>
);

export default HomeLink;
