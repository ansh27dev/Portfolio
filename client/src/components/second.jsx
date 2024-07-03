import React from "react";

const second = () => {
  return (
    <div className="second">
      <div className="title">My Projects</div>
      <div className="projects">
        <div className="pr p1">
          <div className="pleft pic"></div>
          <div className="pright text"></div>
        </div>

        <div className="pr p2">
          <div className="pleft text"></div>
          <div className="pright pic"></div>
        </div>

        <div className="pr p3">
          <div className="pleft pic "></div>
          <div className="pright text"></div>
        </div>
        {/* 
        <div className="pr p4">
          <div className="pleft"></div>
          <div className="pright"></div>
        </div> */}
      </div>
      <hr />
      <div className="stack">
        {/* <iframe
          style="border: 1px solid rgba(0, 0, 0, 0.1);"
          width="800px"
          height="450px"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FORymCGxYgIfkfdFFj6rpkY%2FTech-Stack-Logos-(Community)%3Fnode-id%3D0-1%26t%3DUHMf9X9NRWLEBjaS-1"
        ></iframe> */}
      </div>
    </div>
  );
};

export default second;
