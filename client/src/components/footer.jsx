import React from "react";

const footer = () => {
  return (
    <div className="footer" id="about">
      <div className="left-footer">
        <div className="more">More About Me</div>

        <div className="info">
          Hi, I am Ansh, a Fullstack Developer. I am familiar with Mern Stack. I
          am open to Freelance and work.
        </div>
      </div>
      <br />
      <div className="contact">
        <span>Contact Me</span>
        <br />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <a href="https://twitter.com/ansh27dev" className="icon-button twitter">
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>

        <a
          href="https://www.linkedin.com/in/anshgupta7225"
          className="icon-button linkedin"
        >
          <i className="fab fa-linkedin"></i>
          <span></span>
        </a>
        <a
          href="https://github.com/ansh27dev/ansh27dev"
          className="icon-button github"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default footer;
