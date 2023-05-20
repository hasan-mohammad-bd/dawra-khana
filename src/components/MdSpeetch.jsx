/* eslint-disable react/no-unescaped-entities */
import React from "react";
import image_2 from "../assets/image-2.jpeg";

const MdSpeetch = () => {
  return (
    <div>
      <div>
        <div className="justify-between items-center flex flex-col md:flex-row-reverse ">
          <div className="text flex-1 p-5 md:p-0">
            <div className="md:mx-8">
            <h1 className="text-4xl font-bold mb-5">
              A Message From <br /> Our CEO
            </h1>
            <p className="mb-5">
              " Since 1961, we've harnessed nature's power to heal and flourish.
              Under new leadership, we've overcome challenges, uplifted the
              company, and achieved stability. Join us on our remarkable journey
              of herbal well-being and unlock your true potential. "
            </p>
            <p className="my-3">- Halim Forid Uddin Patwary, CEO</p>
            <a href="">
              <button className="btn btn-success">Read More</button>
            </a>
            </div>
          </div>
          <div className="img flex-1">
            <img className="rounded-[30px] p-5" src={image_2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdSpeetch;
