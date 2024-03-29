import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from"../../assests/docs/IshaMaji-Resume.pdf"

const home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi🙋🏻‍♀ I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Software Developer!", "Frontend Developer!" , "Backend Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
             <button className="btn btn-hire">Hire me</button>
             <a className="btn btn-cv" href={Resume} download={"IshaMaji-Resume.pdf"}>My Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
