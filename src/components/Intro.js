import React from "react";
import Typewriter from "typewriter-effect";

export const Intro = () => {
  return (
    <div className="content-container">
    <div className="typetable ">
      <div className="">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<h2 style="font-size:1cm;">Wanna go for a trip..?</h2>`
              )
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                `<h2 style="font-size:1cm;">Then you are at right place.</h2>`
              )
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                `<h1 style="font-size:1cm;">Welcome to <b style="font-size:1.8cm;">TourGuide</b></h1>`
              )
              .typeString(
                `<br/><br/><br/><h2 style="font-size:1cm;">Pack your bags and Join with us for an exciting <b>trip</b></h2>`
              )
              .start();
          }}
        />
      </div>
    </div>
    </div>
  );
};
