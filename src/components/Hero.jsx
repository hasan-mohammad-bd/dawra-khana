import React from "react";
import image_1 from "../assets/image-1.jpeg";

const Hero = () => {
  return (
    <div>
      <div className="justify-between items-center flex flex-col md:flex-row">
        <div className="text flex-1 p-5 md:p-0">
            <div className="md:mx-8">
            <h1 className="text-3xl md:text-6xl font-bold mb-5">
            Blossom into <br /> Vibrant Wellness..
          </h1>
          <p className="mb-5">
            Welcome to our world of herbal healing and rejuvenation. Experience
            the magic of nature as you embark on a journey to revitalize your
            being. With our carefully crafted herbal remedies, you can embrace
            the harmony of natural ingredients.
          </p>
          <a href=""><button className="btn btn-success">Read More</button></a>
            </div>
        </div>
        <div className="img flex-1">
          <img className="rounded-[30px] p-5" src={image_1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
