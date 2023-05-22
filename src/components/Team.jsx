import React from "react";
import image_11 from "../assets/image-11.jpeg";
import image_12 from "../assets/image-12.jpeg";
import image_13 from "../assets/image-13.jpeg";
import image_14 from "../assets/image-14.jpeg";
import image_15 from "../assets/image-15.jpeg";
import image_16 from "../assets/image-16.jpeg";
// import image_17 from "../assets/image-16.jpeg";
const Team = () => {
  return (
    <div className="team">
      <h2 className="text-4xl mt-24 text-center font-bold">Our Team</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 container mx-auto py-10">
        <div className="overflow-hidden rounded-xl shadow-2xl p-5 bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
          <img className=" object-cover rounded-xl" src={image_12} />
          <h3 className="text-lg font-semibold text-center py-2">
            Shaefali Begum
          </h3>
          <h4 className="text-sm text-center">Vice President Production</h4>
        </div>
        <div className="overflow-hidden rounded-xl shadow-2xl p-5 bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
          <img className=" object-cover rounded-xl" src={image_13} />
          <h3 className="text-lg font-semibold text-center py-2">
            Mehedi Mannan Eti
          </h3>
          <h4 className="text-sm text-center">Account Manager</h4>
        </div>
        <div className="overflow-hidden rounded-xl shadow-2xl p-5 bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
          <img className=" object-cover rounded-xl" src={image_14} />
          <h3 className="text-lg font-semibold text-center py-2">
            Hakim Forhad Uddin Patwary
          </h3>
          <h4 className="text-sm text-center">Production Manager & Controller</h4>
        </div>
        <div className="overflow-hidden rounded-xl shadow-2xl p-5 bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
          <img className=" object-cover rounded-xl" src={image_15} />
          <h3 className="text-lg font-semibold text-center py-2">
            Mohammad Sha Ali
          </h3>
          <h4 className="text-sm text-center">QCA, Quantity Chemist Manager</h4>
        </div>
        <div className="overflow-hidden rounded-xl shadow-2xl p-5 bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
          <img className=" object-cover rounded-xl" src={image_16} />
          <h3 className="text-lg font-semibold text-center py-2">
            Rezwan Ahemed Rifat
          </h3>
          <h4 className="text-sm text-center">Marketing Manager</h4>
        </div>
        <div className="overflow-hidden rounded-xl shadow-2xl p-5 bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
          <img className=" object-cover rounded-xl" src={image_11} />
          <h3 className="text-lg font-semibold text-center py-2">
            Hakim Fahad Uddin Patwary
          </h3>
          <h4 className="text-sm text-center">Factory Manager & Main Hakim</h4>
        </div>
      </div>
    </div>
  );
};

export default Team;
