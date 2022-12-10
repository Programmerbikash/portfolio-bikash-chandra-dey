import React from "react";
import project1 from "../../../assets/first-project.PNG";
import project2 from "../../../assets/second-project.PNG";
import project3 from "../../../assets/third.PNG";

const Project = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-3">My Recent Work</h2>
      <p className="text-xl font-semibold text-center my-3">
        Here are a few past design projects I've worked on. Want to see more?{" "}
        <a href="bikashdey1220@gmail.com">Email me.</a>
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 ml-0 md:ml-10 gap-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={project1} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">First Project</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Show Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={project2} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Second Project</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Show Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={project3} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Third Project</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Show Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
