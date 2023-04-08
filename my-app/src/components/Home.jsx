import React from "react";
import Logo from "./pics/Glorify.png";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import pic1 from "./pics/hall.jpg";
import pic2 from "./pics/kitchen.jpg";
import Design from "./pics/home-4.jpg";
import whatsapp from "./pics/Whatsapp.png";
import phone from "./pics/white-phone.png";
import Consultation from "./pics/Consultation.png";
import idea from "./pics/idea.png";
import design from "./pics/Design-comp.png";
import Execution from "./pics/execution.png";
import Quality from "./pics/Quality.png";
import Budget from "./pics/Budget.png";
import Email from "./pics/Email.png";
import Location from "./pics/location.png";
import bedroom from "./pics/wardrobe.jpg";
import {CgFormatJustify, CgClose} from "react-icons/cg";
import { useState } from "react";



export default function Home(props) {
  const [openMenu, setOpenMenu] = useState(false);
  
  
  return (
    <>
      <div className="head1">
        <div className="Top1">
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
                    color: isActive ? "#74ddf8" : "#189ab4",
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
          <div className="headline">
            <h1 className="animate__animated animate__fadeInUp">
              Glorify Interiors
            </h1>
            <p className="animate__animated animate__fadeInDown">
              Make Your Home, More Sweet With Glorify Interiors
            </p>
            <div className="sb-wa">
            <div id="Services-btn">
              <img src={phone} alt="Error Loading" />
              <a href="/Contact">Contact</a>
            </div>

            <div className="whatsapp">
              <img src={whatsapp} alt="Error Loading" />
              <a href="https://wa.me/919182761154">Whatsapp</a>
              </div>
            </div>


          </div>
        </div>

      <section id="Designing">
        <img id="Designing-img" src={Design} alt={props.titler} />
        <div className="design-body">
          <h1 id="design-body-h1" >Designing Your Dream Home With Glorify Interiors</h1>
          <p id="design-body-p">
            Designing your dream home is process that requires a lot of time,
            effort and attention to detail. We have experience and expertise to
            help you to create your dream home.
          </p>
          <h2 className="design-h2">&#x2713; 2BHK & 3BHK Interiors</h2>
          <h2 className="design-h2">&#x2713; Residential Interiors</h2>
          <h2 className="design-h2">&#x2713; Villa Interiors</h2>
          <form action="/Contact">
            <button type="submit" id="btn-2">
              Contact-Us
            </button>
          </form>
        </div>
      </section>

      <section id="Work-process">
        <div className="process-h1">
          <h4>How do we Work</h4>
          <h2>Our Work Process</h2>
        </div>
        <div className="process-blocks">
          <div className="content">
            <img src={Consultation} alt={props.titler} />
            <h3>Consultation</h3>
            <p>
              First, we meet you at your comfortable free time. On this meet we
              understand your needs, requirements, and discuss some major things
            </p>
          </div>
          <div className="content">
            <img src={idea} alt={props.titler} />
            <h3>Idea</h3>
            <p id="content-p-p2">
              Then, we come up with new concepts, and ideas that reflects your
              themes and style. Here we mix up our suggestions with your ideas
              to give you more perfection.
            </p>
          </div>
          <div className="content">
            <img src={design} alt={props.titler} />
            <h3>Design</h3>
            <p>
              Next, we design the perfect model of your future space. This
              brings color and life to your idea, which brings hint of what your
              space will look like.
            </p>
          </div>
          <div className="content">
            <img src={Execution} alt={props.titler} />
            <h3>Execution</h3>
            <p>
              Finally, we bring the materials and our professionals get to work
              to deliver you, your dream space. I tell, "We put our 100% to make
              you satisfied and happy."
            </p>
          </div>
        </div>
      </section>

      <section id="Section">
        <div id="headline2">
          <h2>Our Services</h2>
        </div>
        <div className="allpics">
          <div className="pic1">
            <img id="hallpic" src={pic1} alt={props.titler} />
            <h3>Living Room</h3>
            <p>
              Our TV units are designed to be both functional and visually
              appealing, Our team is specialized and skilled in designing.
            </p>
          </div>
          <div className="pic1">
            <img id="hallpic" src={pic2} alt={props.titler} />
            <h3>kitchen Room</h3>
            <p>
              Our team of experienced designers will work with you to create a
              functional and stylish kitchen that meets your specific needs and
              preferences.
            </p>
          </div>
          <div className="pic1">
            <img id="hallpic" src={bedroom} alt={props.titler} />
            <h3>BedRoom</h3>
            <p>
              Our wardrobes are designed to be both functional and visually
              appealing. We offer a variety of materials such as wood, laminate,
              and metal to choose from.
            </p>
          </div>
        </div>
        <div className="button1">
          <form action="/services">
            <button type="submit" id="btn">
              See More
            </button>
          </form>
        </div>
      </section>
      <div className="experience grid grid-three-column">
        <div className="exp1">
          <h1>20+</h1>
          <p>Years Experience</p>
        </div>

        <div className="exp1">
          <h1 id="experience-h1">150+</h1>
          <p>Projects Done</p>
        </div>

        <div className="exp1">
          <h1>150+</h1>
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="benefits">
        <div className="beneh1">
          <h1>Why choose us</h1>
        </div>
        <div className="benall">
          <div className="bene1">
            <img src={Quality} alt={props.titler}></img>
            <h3>Best Quality</h3>
            <p>We use superior materials and offer excellent workmanship.</p>
          </div>
          <div className="bene2">
            <img src={Budget} alt={props.titler}></img>
            <h3>Budget Friendly</h3>
            <p>Afforable Design Solutions For Your Home.</p>
          </div>
        </div>
      </div>
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

      {/* footer */}
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
      </div>
    </>
    
  );
  
};
Home.propTypes = {
  titler: PropTypes.string.isRequired,
};
Home.defaultProps = {
  title: "BobbY",
};
