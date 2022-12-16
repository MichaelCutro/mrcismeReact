import React from "react";
import video from "../assets/1984.mp4";

function Return1984() {
  return (
    <div className="absolute inset-x-10 top-0 h-18">
      <div>
        <div className="pl-16">
          <h1 className="text-xl text-black font-bold pt-20 pb-8 ">
            "Every once in a while, a revolutionary technology comes along that
            changes everything."
          </h1>
        </div>
        <video controls autoPlay loop muted>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Return1984;
