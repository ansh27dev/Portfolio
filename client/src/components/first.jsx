import React from "react";
import coder from "../assets/programmer.png";
import ThreeScene from "./threeScene";

function typewriter() {
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
}

const first = () => {
  typewriter();
  return (
    <div className="first">
      <div className="main">
        <ThreeScene></ThreeScene>
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
      </div>
      {/* <div className="extra-text">
        <div class="carousel-wrapper">
          <div class="carousel">
            <div class="item">
              <img src="https://logo.clearbit.com/apple.com" alt="apple"></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/google.com"
                alt="Google"
              ></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/amazon.com"
                alt="Amazon"
              ></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/microsoft.com"
                alt="Microsoft"
              ></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/facebook.com"
                alt="Facebook"
              ></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/netflix.com"
                alt="Netflix"
              ></img>
            </div>
            <div class="item">
              <img src="https://logo.clearbit.com/tesla.com" alt="Testla"></img>
            </div>
            <div class="item">
              <img src="https://logo.clearbit.com/nike.com" alt="Nike"></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/adidas.com"
                alt="Addidas"
              ></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/coca-cola.com"
                alt="Coca-Cola"
              ></img>
            </div>
            <div class="item">
              <img src="https://logo.clearbit.com/apple.com" alt="apple"></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/google.com"
                alt="Google"
              ></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/amazon.com"
                alt="Amazon"
              ></img>
            </div>
            <div class="item">
              <img
                src="https://logo.clearbit.com/microsoft.com"
                alt="Microsoft"
              ></img>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default first;
