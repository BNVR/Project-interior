import React from "react";
import Logo from "./pics/Glorify.png";
import { NavLink } from "react-router-dom";
import mypic from "./pics/mypic.jpg";
import phone from "./pics/white-phone.png";
import Email from "./pics/Email.png";
import Location from "./pics/location.png";
import {CgFormatJustify, CgClose} from "react-icons/cg";
import { useState } from "react";

export default function About(props) {
  const [openMenu, setOpenMenu] = useState(false);
  
  
  return (
    <>
        <div className="Top2">
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
                    color: isActive ? "#74ddf8" : "#189ab4",
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
                    color: isActive ? "#189ab4" : "#189ab4",
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
        <div className="headline Top2-headline">
          <h1 className="animate__animated animate__fadeInUp">About-Us</h1>
          <p className="animate__animated animate__fadeInDown">
            Make Your Home, More Sweet With Glorify Interiors
          </p>
        </div>
      </div>
      {/* ================ */}
      {/*       Body       */}
      {/* ================ */}
      <section>
        {/* p-1 */}
        <div className="ab-1">
          <div className="ab-1-img">
            <img src={Logo} alt={props.titler}></img>
          </div>
          <div className="ab-1-m">
            <h1>Glorify Interiors</h1>
            <p>
              we believe that authentic designs are the key to creating a
              timeless look for your home. Our team sources only the highest
              quality materials, ensuring that your home will stand the test of
              time. We take great care in selecting the perfect pieces for your
              space.
            </p>
            <p>
              Our team of professional designers will work closely with you to
              understand your vision, your lifestyle, and your budget. We will
              then create a custom design plan that reflects your personal style
              and meets your functional needs.
            </p>
            <p id="ab-1-m-p-3">
              Our team of experienced designers will work with you to create a
              functional and stylish interior that meets your specific needs and
              preferences.
            </p>
          </div>
        </div>
        {/* p-2 */}
        <div className="ab-2">
          <div className="ab-2-m">
            <h1>Full-Stack Developer</h1>
            <p>
              I'm B.Venkata Ramana Pursuing My B.Tech From St. Martins
              Engineering College, I am a Full-Stack Developer. I can provide
              Clean Code and pixel perfect Design. I can also Make The website more
              and more Interactive with web Animations.
            </p>
          </div>
          <div className="ab-2-img">
            <img src={mypic} alt={props.titler}></img>
          </div>
        </div>
        <div className="feedback-head">
          <h1>Give your Feedback about this website</h1>
        </div>
        <form
          id="about-form"
          action="https://formspree.io/f/meqwrkbk"
          method="POST"
        >
          <div className="feedback">
            <textarea id="text-ab" name="message" rows="4" cols="38.98" required></textarea>
            <div className="error"></div>
          </div>
          <div id="feedback-btn">
            <button type="submit">Sumbit</button>
          </div>
        </form>
      </section>

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
          <a href="/Contact">Get Started</a>
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
};
