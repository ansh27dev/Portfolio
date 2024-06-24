import { useState } from "react";
import "./App.css";
import coder from "./assets/programmer.png";

function App() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <a href="/">
            <div className="logo">PORTFOLIO</div>
          </a>
        </div>
        <div className="nav-right">
          <ul className="nav-right-list">
            <li>
              <a href="#first">Home</a>
            </li>
            <li>
              <a href="#third">About</a>
            </li>
            <li>
              <a href="#second">Projects</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="first">
        <div className="main">
          <div className="intro card">
            <div className="text">
              {" "}
              <h1>
                <a
                  href=""
                  class="typewrite"
                  data-period="2000"
                  data-type='[ "Hi, I am Ansh.", "I am a Fullstack Developer.", "I Love to code.", "I Love to Develop." ]'
                >
                  <span class="wrap"></span>
                </a>
              </h1>
            </div>
          </div>
          <div className="element">
            <img src={coder} alt="" />
          </div>
        </div>
        <div className="extra-text"></div>
      </div>

      <div className="second"></div>

      <div className="footer"></div>
    </>
  );
}

export default App;
