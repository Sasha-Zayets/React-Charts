import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => (
  <div className="home-page">
    <h1>Welcome :)</h1>
    <div className="home-links">
      <Link to="/comments" className="home-link">
        Comments Chart
      </Link>
      <Link to="/gender" className="home-link">
        Gender Chart
      </Link>
    </div>
  </div>
);

export default Home;
