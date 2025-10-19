import React from "react";
import "../Styles/Search_results.css";
import { FaSearch, FaPlay } from "react-icons/fa";
import {Link} from "react-router-dom"
// import car1 from "./images/car1.png"

const Search_results = () => {
  return (
    <div className="transportation-page">
      {/* ===== Header Placeholder ===== */}
      <header className="transportation-header">
        <div className="header-bar">
        <Link to="/">
            home
        </Link>
        </div>
      </header>

      {/* ===== Search Bar Section ===== */}
      <section className="transportation-search-bar">
        {/* <car1/> */}

        <div className="transportation-filters">
          <input
            type="text"
            placeholder="Pick-up location"
            className="transportation-input"
          />
          <input type="text" placeholder="Destination" className="transportation-input" />
          <input type="date" className="transportation-input" />
          <input type="time" className="transportation-input" />
          <select className="transportation-input">
            <option value="" selected disabled>Select type</option>
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="shared">Shared Ride</option>
          </select>
        </div>

        <button className="transportation-search-btn">
          <FaSearch />
        </button>
      </section>

      {/* ===== Available Transportation Section ===== */}
      <section className="transportation-available">
        <div className="transportation-section-title">
          <span>Available transportation</span>
          <FaPlay className="transportation-arrow" />
        </div>

        <hr className="transportation-divider" />

        <div className="transportation-grid">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="transportation-card"></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Search_results;
