import React from "react";
import './App.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import git from "./public/pictures/git.png";
import azure from "./public/pictures/azure.png";
import gitlab from "./public/pictures/gitlab.png";
import bitbucket from "./public/pictures/bitbucket.png";
import key from './public/pictures/key.png';
const ihost = [
  {
    img: gitlab,
    icontext: "Sign in with GitLab",
  },
  {
    img: key,
    icontext: "Sign in with SSO",
  }
];
const ilogos = [
  {
    img: git,
    icontext: "Sign in with Github",
  },
  {
    img: bitbucket,
    icontext: "Sign in with Bitbucket",
  },
  {
    img: azure,
    icontext: "Sign in with Azure Devops",
  },
  {
    img: gitlab,
    icontext: "Sign in with GitLab",
  },
];

function Sign() {
    const [list,setlist]=useState(ilogos)
    return (
      <div className="sign">
        <div className="left-side">
          <div className="logo">
            <img
              src={require("./public/pictures/Subtract.png")}
              alt="background logo"
              id="bk-logo"
            />
          </div>
          <div className="center">
            <div className="box-1">
              <div className="box-2">
                <div className="box-2top">
                  <div className="logo-box">
                    <img
                      src={require("./public/pictures/logo.png")}
                      alt="mini logo"
                      className="mini-logo"
                    />
                    <p id="logotext">AI to Detect & Autofix Bad Code</p>
                  </div>
                </div>
                <div className="box-2bottom">
                  <div className="box-2bottombox">
                    <p className="box2-number">30+</p>
                    <p className="box2-text">Language Support</p>
                  </div>
                  <div className="box-2bottombox">
                    <p className="box2-number">10K+</p>
                    <p className="box2-text">Developers</p>
                  </div>
                  <div className="box-2bottombox">
                    <p className="box2-number">100K+</p>
                    <p className="box2-text">Hours Saved</p>
                  </div>
                </div>
                <div className="rating"></div>
              </div>
              <div className="box-3">
                <div className="box3-inrbox">
                  <div className="inrbox-left">
                    <div className="inrcircl">
                      <img
                        src={require("./public/pictures/purple.png")}
                        alt="background logo"
                        id="inrlogo"
                      />
                    </div>
                    <div className="inrbox">
                      <p className="inrtxt">Issues Fixed</p>
                      <p className="inrnmr">500K+</p>
                    </div>
                  </div>
                  <div className="inrbox-right">
                    <div className="arrowlogo">
                      <img
                        src={require("./public/pictures/arrow.png")}
                        alt="mini logo"
                        className="arrow-logo"
                      />
                      <p id="arrowtext">14%</p>
                    </div>
                    <p className="arowtext">This week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="signin-page">
            <div className="sign-top">
              <div className="sign-logo">
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
                <p>Welcome to CodeAnt AI</p>
              </div>
              <div className="welcome">
                <button type="button" className={`signbutton ${list === ihost ? "grey" : "blue"}`} onClick={()=>setlist(ilogos)}>
                  SAAS
                </button>
                <button type="button" className={`signbutton ${list === ilogos ? "grey" : "blue"}`} onClick={()=>setlist(ihost)}>
                  Self Hosted
                </button>
              </div>
            </div>
            <div className="sign-bottom">
              {list.map((ilogo, index) => (
                <Link to="/repo" type='button' className="signin" key={index}>
                  <div className="icon">
                    <img src={ilogo.img} alt="mini logo" className="iconlogo" />
                    <p className="icontext">{ilogo.icontext}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="signin-text">
            <p>
              By signing up you agree to the <b>Privacy Policy.</b>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Sign;