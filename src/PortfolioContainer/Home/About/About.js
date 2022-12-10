import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import image from "../../../assets/images.png";

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m5w8w1o",
        "template_6lrkp1n",
        form.current,
        "E3bL3aAb4_ny2N0aH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="hero w-full">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left p-2 card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
            <img
              src={image}
              alt=""
              className="w-full md:h-[300px] h-full rounded-lg shadow-2xl"
            />
            <p className="text-xl">
              I am available for create your website. Connect with me via and
              call in to my account.
            </p>
            <p className="text-xl">Phone: +88 018 12203014</p>
            <p className="text-xl">Email: bikashdey1220@gmail.com</p>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
            <div className="card-body">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Write Your Name"
                    name="user_name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    name="user_email"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered"
                    placeholder="Bio"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-success"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="my-20">
      <div className="text-center">
        <h5 className="text-3xl">Contact</h5>
        <h2 className="text-xl">Contact With Me</h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
          <label><AiOutlineMail /> Name</label>
          <input type="text" placeholder="Type here" name="user_name" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
          <label>Email</label>
          <input type="email" placeholder="Type here" name="user_email" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
          <label>Message</label>
          <textarea name="message" className="textarea textarea-bordered" placeholder="Bio"></textarea>
          </div>
        <input className="btn btn-success" type="submit" value="Send" />
    </form>
    </div> */}
    </>
  );
};

export default About;
