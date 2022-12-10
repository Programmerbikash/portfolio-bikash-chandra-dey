import React from "react";
import { Link } from "react-router-dom";
import banner from '../../../assets/profile.jpg'

const Banner = () => {
  return (
    <div>
      <div className="hero h-[500px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="w-full md:w-1/2 h-[470px] rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold">Front-end Developer/ Mern Stack Developer</h1>
            <p className="py-6">
            I design and code beautifully simple things, and I love what I do.
            </p>
            <Link to="aboutMe"><button className="btn btn-primary">Abou Me</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
