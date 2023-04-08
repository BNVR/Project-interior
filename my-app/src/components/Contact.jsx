import React from "react";
import { NavLink } from "react-router-dom";
import {CgFormatJustify, CgClose} from "react-icons/cg";
import { useState } from "react";
import Logo from "./pics/Glorify.png";
import Email from "./pics/Email.png";
import Location from "./pics/location.png";
import phone from "./pics/white-phone.png";

export default function About(props) {
  const [openMenu, setOpenMenu] = useState(false);
  
  
  return (
    <>
        <div className="Top4">
          <nav id="navbar1">
            <div id="logoname">
              <img src={Logo} alt={props.titler}></img>
              <h4> Glorify Interiors</h4>
            </div>
            <div className= {openMenu ? "menuIcon active" : "menuIcon" }>
            <ul className="navbar-list">
              <li>
                <NavLink
                  style={(isActive) => ({
                    color: isActive ? "#189ab4" : "#189ab4",
                  })}
                  className="navbar-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={(isActive) => ({
                    color: isActive ? "#189ab4" : "#189ab4",
                  })}
                  className="navbar-link"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={(isActive) => ({
                    color: isActive ? "#189ab4" : "#189ab4",
                  })}
                  className="navbar-link"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={(isActive) => ({
                    color: isActive ? "#74ddf8" : "#189ab4",
                  })}
                  className="navbar-link"
                  to="/Contact"
                >
                  Contact-Us
                </NavLink>
              </li>
            </ul>
            <div className="call-phone">
              <img id="top-image" src={phone} alt="Error Loading" />
              <a id="top-a" href="tel:+919182761154">+91 8978584879</a>
            </div>
            {/* mobile */}
            <div className="mobile-navbar-btn">
              <CgFormatJustify className="menu-outline mobile-nav-icon"
              onClick={()=>setOpenMenu(true)}
              />
              <CgClose className="close-outline mobile-nav-icon"
              onClick={()=>setOpenMenu(false)}
              />
            </div>
            </div>

          </nav>
      </div>
      <div className="headline Top4-headline">
        <h1 className="animate__animated animate__fadeInUp">Contact-Us</h1>
        <p className="animate__animated animate__fadeInDown">
          Make Your Home, More Sweet With Glorify Interiors
        </p>
      </div>
      {/* forms */}
      <div className="form-head">
        <div className="Qoute">
          <h1>Request a Quote</h1>
          <p>
            If you're interested in know more about how Glorify Interiors can
            help you design your dream home, please don't hesitate to contact
            us.
          </p>
        </div>
        <form id="form2" action="https://formspree.io/f/meqwrkbk" method="POST">
          <div className="input-control2">
            <label htmlFor="myname">Name :</label>
            <input
              id="myname"
              name="myname1"
              type="text"
              placeholder="Enter Your Name"
              required
            />
            <div className="error"></div>
          </div>
          <div className="input-control2">
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              name="Email"
              type="Email"
              placeholder="Enter Your Email"
              required
            />
            <div className="error"></div>
          </div>
          <div className="input-control2">
            <label htmlFor="tel">Phone :</label>
            <input
              id="tel"
              name="mytel"
              type="phone"
              pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
              placeholder="876XXXXXXX"
              required
            />
            <div className="error"></div>
          </div>
          <div className="mb-b5-2">
            <label htmlFor="text" className="textarea1">
              Interior Work Details :
            </label>
            <textarea
              id="text"
              name="message"
              rows="4"
              cols="38.98"
              required
            ></textarea>
            <div className="error"></div>
          </div>
          <div id="btnn2">
            <button type="submit">Sumbit</button>
          </div>
        </form>
      </div>

      {/* footer */}
      <div className="get-in">
        <div className="get-hp">
          <h1>Your dream home is just a click away</h1>
          <p>
            If you're interested in know more about how Glorify interiors can
            help you design your dream home, please don't hesitate to contact
            us.{" "}
          </p>
        </div>
        <div id="get-btn">
          <img src={phone} alt="Error Loading" />
          <a href="tel:+919182761154">Get Started</a>
        </div>
      </div>
      <footer className="foot1">
        <div className="footer-logo">
          <img src={Logo} alt={props.titler}></img>
          <h4>Glorify Interiors</h4>
          <p>Make Your House, More Sweet With Glorify Interiors</p>
        </div>
        <div className="footer-info">
          <h2>Info</h2>
          <a href="/About">About Us</a>
          <a href="/services">Services</a>
          <a href="/Contact">Contact US</a>
          <a href="/Gallary">Gallary</a>
        </div>

        <div className="footer-contact">
          <h2>Contact-Us</h2>
          <div id="footer-phone">
            <img src={phone} alt="Error Loading" />
            <a href="tel:+919182761154">+91 9182761154</a>
          </div>
          <div className="footer-email">
            <img src={Email} alt="Error Loading" />
            <p>glorifyinteriors@gmail.com</p>
          </div>
          <div className="footer-location">
            <img src={Location} alt="Error Loading" />
            <p>Kukatpally, Hyderabad, Telangana 500085</p>
          </div>
        </div>
        <div className="footerr">
          <p>
            Copyright &#169; wwww.glorifyinteriors.com, All Rights Reserved!
          </p>
        </div>
      </footer>
    </>
  );
}
