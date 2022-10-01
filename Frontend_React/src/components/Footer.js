import React, { Profiler } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Discord, Facebook, Linkedin, Telephone, Youtube } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <footer className="footer--pin fottt">
        <div className="row g-1 foot-align">
          <div className="col foot-list">
          <ul className="">
              <li><ArrowRight/> About</li>
              <li><Telephone/> Contact Us</li>
          </ul>
          </div>
          <div className="col" style={{fontSize: '2.5rem', }}>
            <div className="row icon-area">
            <div className="col-2 icon"><Facebook/></div>
            <div className="col-2 icon"><Linkedin/></div>
            <div className="col-2 icon"><Discord/></div>
            <div className="col-2 icon"><Youtube/></div>
            </div>
          </div>
          <div className="col out-logo">
          <Badge bg="light" text="dark" >TourGuide</Badge>
          <p>©TourGuide <u>INDIA</u></p>
          </div>
          </div>
      </footer>
    </>
  );
};
