import React from "react";
import { GiArcheryTarget } from "@react-icons/all-files/gi/GiArcheryTarget";
import { FaBinoculars } from "@react-icons/all-files/fa/FaBinoculars";
import { HiBriefcase } from "@react-icons/all-files/hi/HiBriefcase";

const Mission = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3 container mx-auto">
      <div className="mission card backdrop-blur-sm bg-base-300 hover:bg-blue-200 transition-colors">
        <div className="icon mx-auto pt-8 text-6xl text-blue-600">
          <GiArcheryTarget />
        </div>
        <p className="text-lg font-semibold text-center my-3">Mission</p>
        <div className="text px-8">
          Our mission at the company founded by Md. Nasir Uddin Patwary is to
          harness the healing power of nature and provide high-quality herbal
          medicines that promote well-being, addressing the specific needs of
          our customers while ensuring their satisfaction and long-term health.
        </div>
      </div>
      <div className="mission card backdrop-blur-sm bg-base-300 hover:bg-blue-200 transition-colors">
        <div className="icon mx-auto pt-8 text-6xl text-blue-600">
          <FaBinoculars />
        </div>
        <p className="text-lg font-semibold text-center my-3">Vision</p>
        <div className="text px-8">
          Our vision is to be a leading provider of herbal medicines, recognized
          for our commitment to innovation, customer-centric approach, and
          continuous improvement in promoting natural healing solutions, while
          striving to enhance the overall well-being of individuals worldwide.
        </div>
      </div>
      <div className="mission card backdrop-blur-sm bg-base-300 hover:bg-blue-200 transition-colors">
        <div className="icon mx-auto pt-8 text-6xl text-blue-600">
          <HiBriefcase />
        </div>
        <p className="text-lg font-semibold text-center my-3">Objective</p>
        <div className="text px-8">
          Our objective is to consistently deliver effective, safe, and reliable
          herbal medicines that meet the diverse healthcare needs of our
          customers, while ensuring sustainable growth, fostering innovation,
          and maintaining our position as a trusted leader in the herbal
          medicine industry.
        </div>
      </div>
    </div>
  );
};

export default Mission;
