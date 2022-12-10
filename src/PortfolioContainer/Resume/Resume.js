import React from "react";

const Resume = () => {
  return (
    <div>
      <h2 className="text-5xl text-center font-extrabold">My Resume</h2>
      <div className="">
        <div className="w-full my-2 bg-success text-primary-content">
          <div className="card-body">
            <h2 className="text-center font-extrabold text-4xl">Objective</h2>
            <p>I am knowledgeable in a wide variety of computer languages as well as the principles and 
techniques of website construction and maintenance. I want to be a senior web developer 
because I love it very much. I can develop dynamic and responsive websites and then base, 
Bootstrap framework and daisy UI component etc. It provides a slick, smooth and responsive 
user interface while significantly reducing load time. The website will have neat and clean 
code, a better user experience and a flexible and fully responsive web application.</p>
          </div>
        </div>
        <div className="w-full my-2 bg-success text-primary-content">
          <div className="card-body">
            <h2 className="text-center font-extrabold text-4xl">Skills</h2>
            <p><span className="font-bold text-2xl">Comfortable: -</span> HTML, CSS3, Bootstrap5, Tailwind CSS, ES6, JavaScript, Firebase 
authentication, React JS.</p>
            <p><span className="font-bold text-2xl">Familiar: -</span>  Node.js, Express.js, MongoDB, Figma.</p>
            <p><span className="font-bold text-2xl">Tools: -</span> VS Code, GitHub, Chrome Dev Tools, MongoDB CRUD, Netlify, Vercel, 
Firebase.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
