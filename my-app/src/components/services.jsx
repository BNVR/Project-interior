import React from "react";
import Logo from "./pics/Glorify.png";
import { NavLink } from "react-router-dom";
import phone from "./pics/white-phone.png";
import Email from "./pics/Email.png";
import Location from "./pics/location.png";
import kitchen from "./pics/home-3.jpg";
import Wardrobe from "./pics/wardrobe.jpg";
import Tvunit from "./pics/modern-bg.jpg";
import partition from "./pics/partition.jpg";
import pooja from "./pics/pooja-mandir.jpeg"
import {CgFormatJustify, CgClose} from "react-icons/cg";
import { useState } from "react";

export default function About(props) {
  const [openMenu, setOpenMenu] = useState(false);
  
  
  return (
    <>
        <div className="Top3">
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
                    color: isActive ? "#74ddf8" : "#189ab4",
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
        <div className="headline top3-headline">
          <h1 className="animate__animated animate__fadeInUp">Our Services</h1>
          <p className="animate__animated animate__fadeInDown">
            Make Your Home, More Sweet With Glorify Interiors
          </p>
        </div>
      </div>
      {/* ================ */}
      {/*       Body       */}
      {/* ================ */}
      <section id="services-body">
        <div className="sb-1">
          <div className="sb-1-img">
            <img src={kitchen} alt={props.titler}></img>
          </div>
          <div className="sb-1-m">
            <h1>Modular Kitchen</h1>
            <p>
              Our team of experienced designers will work with you to create a
              functional and stylish kitchen that meets your specifi needs and
              preferences.
            </p>
            <p>
              &#x2713; Modular kitchens are a great option for those looking to
              maximize space and efficiency in their kitchen.
            </p>
            <p>
              &#x2713; These pre-fabricated units come in a variety of sizes and
              styles, making it easy to create a custom look that fits your
              space and budget.
            </p>
            <p>
              &#x2713; we use only the best materials for our modular kitchens,
              ensuring that they are durable and long-lasting.
            </p>
          </div>
        </div>
        <div className="sb-2">
          <div className="sb-2-m">
            <h1>Wardrobes</h1>
            <p>
              Our wardrobes are designed to be both functional and visually
              appealing. We offer a variety of materials such as wood, laminate,
              and metal to choose from. Our team will help you choose the best
              material for your wardrobe based on your budget and design style.
            </p>
            <p>
              &#x2713; Our wardrobes are designed to maximize storage space and
              to provide easy access to your clothes and accessories
            </p>
            <p>
              &#x2713; We can incorporate a variety of features such as pull-out
              drawers, shoe racks, and hanging space to suit your specific
              needs.
            </p>
          </div>
          <div className="sb-2-img">
            <img src={Wardrobe} alt={props.titler}></img>
          </div>
        </div>
        <div className="sb-3">
          <div className="sb-3-img">
            <img src={partition} alt={props.titler}></img>
          </div>
          <div className="sb-3-m">
            <h1>Partitions</h1>
            <p>
              Partitions for a home can refer to several different types of
              dividers or barriers that can be used to separate different areas
              within a home.
            </p>
            <p>
              &#x2713; Wall partitions: These are permanent dividers that are
              built into the structure of a home and are used to create separate
              rooms or areas. They can be made from drywall, plaster, or other
              building materials.
            </p>
            <p>
              &#x2713; Sliding partitions: This type of partition slides along a
              track, allowing it to be easily opened and closed. They can be
              used to separate a living room from a dining room, for example.
            </p>
            <p>
              &#x2713; Room dividers: These are freestanding partitions that can
              be moved around to divide a larger room into smaller, separate
              spaces. They can be made from a variety of materials, such as
              wood, metal, or fabric.
            </p>
          </div>
        </div>
        <div className="sb-2">
          <div className="sb-2-m">
            <h1>TV Unit</h1>
            <p>
              Our team of experienced designers and skilled craftsmen will work
              with you to create a TV Unit that not only enhances the aesthetic
              of your living room but also provides ample storage and
              functionality
            </p>
            <p>
              &#x2713; We offer a variety of materials such as wood, metal,
              glass, and laminate to choose from. Our team will help you choose
              the best material for your unit based on your budget and design
              style.
            </p>
            <p>
              &#x2713; We can create TV units in a wide range of designs, from
              sleek and modern to traditional and ornate, that will complement
              the aesthetic of your home.
            </p>
          </div>
          <div className="sb-2-img">
            <img src={Tvunit} alt={props.titler}></img>
          </div>
        </div>
        <div className="sb-1">
        <div className="sb-1-img">
            <img src={pooja} alt={props.titler}></img>
          </div>
          <div className="sb-1-m">
            <h1>Pooja Mandir</h1>
            <p>
            We understand the importance of creating a sacred space for daily worship and rituals, and our team of skilled craftsmen will work with you to design a pooja mandir that is not only functional but also visually appealing and in harmony with the aesthetic of your home.
            </p>
            <p>
              &#x2713; Our designs can be traditional or contemporary depending on your preferences, and we can also incorporate specific elements such as carvings, inlay work, or intricate patterns to add a touch of elegance to the mandir.
            </p>
            <p>
              &#x2713; Our team can create pooja mandirs in a variety of materials such as wood, marble or even a combination of materials.
            </p>

          </div>
        </div>
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
}
