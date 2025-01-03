import React from "react";
import down from "./public/pictures/chevron-down.png";
import fresh from "./public/pictures/refresh.png";
import plus from "./public/pictures/plus.png";
import search from "./public/pictures/search.png";
import badge from "./public/pictures/Badge.png";
import badge1 from "./public/pictures/Badge (1).png";
import elipse from "./public/pictures/Ellipse 1.png";
import bars from "./public/pictures/bars.png";
import "./Repo.css";
import { useState,useEffect } from "react";
import database from './public/pictures/database.png'
const repos=[
  {
    reponame:"design-system",
    repoimg:badge,
    repocode:"React",
    repostorage:"2343 KB",
    update:"Updated 4 days ago"
  },
  {
    reponame:"codeant-ci-app",
    repoimg:badge1,
    repocode:"Javascript",
    repostorage:"5871 KB",
    update:"Updated 2 days ago"
  },
  {
    reponame:"analytics-dashboard",
    repoimg:badge,
    repocode:"Python",
    repostorage:"7333 KB",
    update:"Updated 1 days ago"
  },
  {
    reponame:"mobile-app",
    repoimg:badge1,
    repocode:"Swift",
    repostorage:"1843 KB",
    update:"Updated 1 days ago"
  },
  {
    reponame:"e-commerce-platform",
    repoimg:badge1,
    repocode:"Javat",
    repostorage:"2343 KB",
    update:"Updated 4 days ago"
  },
  {
    reponame:"blog-website",
    repoimg:badge,
    repocode:"HTML/CSS",
    repostorage:"2343 KB",
    update:"Updated 4 days ago"
  },
  {
    reponame:"social-network",
    repoimg:badge,
    repocode:"PHP",
    repostorage:"2343 KB",
    update:"Updated 4 days ago"
  }
]

function Repo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 751);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 751);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [list, setlist] = useState("Repositories");
  const TruncatedText = ({ text, maxLength }) => {
    // Function to truncate the string
    const truncate = (str, maxLen) => {
      if (str.length > maxLen) {
        return str.slice(0, maxLen) + "...";
      }
      return str;
    };

    return <span>{truncate(text, maxLength)}</span>;
  };

  return (
    <>
      <div className="repo">
        <div className="rightrepo">
          <div className="repologobox">
            <div className="signlogo">
            <div className="dropdown">
            <div className="sign-box">
                <img
                  src={require("./public/pictures/logo.png")}
                  alt="mini logo"
                  className="mini-logo"
                />
                <img
                  src={require("./public/pictures/signlogo.png")}
                  alt="mini logo"
                  className="signlogo-txt"
                />
              </div>
              <img src={bars} id="bar"  onClick={toggleMenu}/>
            </div>
              <div className="dropdownlist" style={{  display:  isMobile&&menuOpen ? "none":"flex" }}>
              <button className="repolist">
                <span className="reponame">
                  <TruncatedText text={"UtkarshDhairyaPanwar"} maxLength={15} />{" "}
                </span>
                <img src={down} />
              </button>
              </div>
            </div>
            <div className="repobuttons" style={{  display: isMobile&&menuOpen ? "none":"flex" }}>
              <button
                type="button"
                className={`sign-button ${
                  list === "Repositories" ? "blue1" : "grey1"
                }`}
                onClick={() => setlist("Repositories")}
              >
                <p>
                  <img
                    src={require("./public/pictures/home.png")}
                    alt="background logo"
                    className="inrlogo home"
                  />
                  <img
                    src={require("./public/pictures/home (1).png")}
                    alt="background logo"
                    className="inrlogo home1"
                  />
                  Repositories
                </p>
              </button>
              <button
                type="button"
                className={`sign-button ${
                  list === "AI Code Review" ? "blue1" : "grey1"
                }`}
                onClick={() => setlist("AI Code Review")}
              >
                <p>
                  <img
                    src={require("./public/pictures/code.png")}
                    alt="background logo"
                    className="inrlogo"
                  />
                  AI Code Review
                </p>
              </button>
              <button
                type="button"
                className={`sign-button ${
                  list === "Cloud Security" ? "blue1" : "grey1"
                }`}
                onClick={() => setlist("Cloud Security")}
              >
                <p>
                  <img
                    src={require("./public/pictures/cloud.png")}
                    alt="background logo"
                    className="inrlogo"
                  />
                  Cloud Security
                </p>
              </button>
              <button
                type="button"
                className={`sign-button ${
                  list === "How to Use" ? "blue1" : "grey1"
                }`}
                onClick={() => setlist("How to Use")}
              >
                <p>
                  <img
                    src={require("./public/pictures/book.png")}
                    alt="background logo"
                    className="inrlogo"
                  />
                  How to Use
                </p>
              </button>
              <button
                type="button"
                className={`sign-button ${
                  list === "Settings" ? "blue1" : "grey1"
                }`}
                onClick={() => setlist("Settings")}
              >
                <p>
                  <img
                    src={require("./public/pictures/gear.png")}
                    alt="background logo"
                    className="inrlogo"
                  />
                  Settings
                </p>
              </button>
            </div>
          </div>
          <div className="repobuttons end" style={{ display: isMobile&&menuOpen ? "none":"flex", }}>
            <button
              type="button"
              className={`sign-button ${list === "Support" ? "blue1" : "grey1"}`}
              onClick={() => setlist("Support")}
            >
              <p>
                <img
                  src={require("./public/pictures/phone.png")}
                  alt="background logo"
                  className="inrlogo"
                />
                Support
              </p>
            </button>
            <button
              type="button"
              className={`sign-button ${list === "Logout" ? "blue1" : "grey1"}`}
              onClick={() => setlist("Logout")}
            >
              <p>
                <img
                  src={require("./public/pictures/sign-out.png")}
                  alt="background logo"
                  className="inrlogo"
                />
                Logout
              </p>
            </button>
          </div>
        </div>
        <div className="leftrepo">
          <div className="leftrepo-center">
            <div className="lefttop" style={{  display: isMobile&&!menuOpen ? "none":"flex" }}>
              <div className="toprepo">
                <div className="topreponame">
                  <p className="repohead">Repositories</p>
                  <p className="repohead1">33 total repositories</p>
                </div>
                <div className="buttons">
                  <button type="button" className="icons clor">
                    <img src={fresh} alt="mini logo" className="icnlogo" />
                    <p className="icntext">Refresh All</p>
                  </button>
                  <button type="button" className="icons clor1">
                    <img src={plus} alt="mini logo" className="icnlogo" />
                    <p className="icntext">Add Repository</p>
                  </button>
                </div>
              </div>
              <div className="toprepo">
                <div className="search">
                  <img src={search} />
                  <input
                    type="search"
                    placeholder="Search Repositories"
                  ></input>
                </div>
              </div>
            </div>
            <div className={`bottomrepo ${isMobile && !menuOpen ? 'shadow' : ''}`}>
            {repos.map((singlerepo, index) => (
              <div className="reponames" key={index}>
                <div className="repobox">
                  <p className="repop">{singlerepo.reponame}<img src={singlerepo.repoimg} className="privateicon"></img></p>
                  <div className="repobottombox">
                  <div className="elementsbox">
                      <p className="element arowtext">{singlerepo.repocode}
                      <img src={elipse}/>
                      </p>
                      <div className="element">
                      <img
                        src={database}
                        className="datalogo"
                      />
                      <p className="arowtext">{singlerepo.repostorage}</p>
                    </div>
                    <div className="element">
                      <p className="arowtext">{singlerepo.update}</p>
                    </div>
                    </div>
                  </div>
                </div>
               </div>
                           
             ))}
               
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Repo;
