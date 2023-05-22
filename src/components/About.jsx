/* eslint-disable react/no-unescaped-entities */
import React from "react";
import image_9 from "../assets/image-9.jpeg";
import image_10 from "../assets/image-10.jpeg";
import Mission from "./Mission";

const About = () => {
  return (
    <div id="about">
      <div className="justify-between items-center flex flex-col md:flex-row">
        <div className="text flex-1 p-5 md:p-0">
          <div className="md:mx-8 mt-16 md:mt-24">
            <h1 className="text-2xl md:text-4xl font-bold mb-5">
              About Our Company
            </h1>
            <p className="mb-5">
              In 1961, Md. Nasir Uddin Patwary founded Sreepur Unani Dawakhana with a noble
              mission – to produce herbal medicine that would benefit customers
              health and well-being. With a strong belief in the power of
              nature, he embarked on a journey to create a company that would
              bring the healing properties of herbs to the masses.
              <br />
              <br />
              For many years, the company flourished, gaining a reputation for
              its high-quality herbal products. However, as time passed,
              challenges began to emerge. Economic hardships and a
              near-bankruptcy situation cast a shadow over the once-thriving
              enterprise. Faced with mounting losses, the owner contemplated
              shutting down the company, fearing it had reached the end of its
              road.
              <br />
              <br />
              Halim understood that to revitalize the company, it needed a fresh
              approach. On his first day as CEO, he implemented significant
              changes to enhance the organization's structure and operations.
              Recognizing the importance of efficient processes, he established
              a supply chain department to ensure smooth procurement and
              distribution of raw materials. Furthermore, he recognized the
              value of the company's employees and established a human resources
              department to focus on their development and well-being.
              Understanding the significance of effective marketing strategies,
              Halim also added a dedicated marketing department to promote the
              company's products and expand its reach.
            </p>
          </div>
        </div>
        <div className="img flex-1">
          <img
            className="rounded-[30px] p-5 mt-0  md:mt-16 "
            src={image_9}
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="justify-between items-center flex flex-col md:flex-row-reverse ">
          <div className="text flex-1 p-5 md:p-0">
            <div className="md:mx-8">
                <p>
                Halim's hard work and strategic decisions soon paid off. With
              renewed vigor, the company began to overcome its challenges and
              regain its position in the market. The once-struggling enterprise
              once again became profitable, much to the delight of its
              employees, stakeholders, and loyal customers. <br /> <br /> Buoyed by this
              success, the company set its sights on the future. Recognizing the
              growing importance of technology, Halim proposed the addition of
              an IT department to further enhance the company's operations and
              embrace digital advancements. By leveraging technology, the
              company aimed to streamline its processes, improve efficiency, and
              better serve its customers. <br /><br /> As the company flourished, it
              continued to receive overwhelming positive feedback from customers
              who experienced the benefits of the herbal products firsthand.
              Listening to their needs and demands, the company also diversified
              its offerings, introducing new medicines tailored to meet specific
              patient requirements. This customer-centric approach further
              solidified the company's reputation and contributed to its ongoing
              success.
                </p>
            </div>
          </div>
          <div className="img flex-1">
            <img className="rounded-[30px] p-5" src={image_10} alt="" />
          </div>
        </div>
      </div>
      <Mission/>
    </div>
  );
};

export default About;
