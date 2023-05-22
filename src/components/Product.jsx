import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import image_3 from "../assets/image-3.jpeg";
import image_4 from "../assets/image-4.jpeg";
import image_5 from "../assets/image-5.jpeg";
import image_6 from "../assets/image-6.jpeg";
import image_7 from "../assets/image-7.jpeg";
import image_8 from "../assets/image-8.jpeg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
<div id="product">
<AutoplaySlider
  id=""
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={4000}
  >
    <div id="" className="hero h-full bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
      <div className="hero-content  flex flex-col lg:flex-row-reverse">
        <img
          src={image_3}
          className="max-w-[150px] md:max-w-sm rounded-lg w-[100%]  shadow-2xl flex-1 p-5 md:ml-8"
        />
        <div className="">
          <h1 className="text-xl md:text-4xl font-bold">Habbe Suranjan</h1>
          <p className="py-6 hidden md:block">
            Functionality: Effective for inflammation of glands,
            <br /> glandular pain, and gout.
            <br />
            <br />
            Instructions for use: Take 2-4 tablets daily or as <br /> advised by
            a physician.
            <br />
            <br />
            Precautions: Store away from light, in a cool and <br /> dry place.
            Keep out of reach of children.
          </p>
          <a href=""><button className="btn btn-primary hidden md:block">
            Contact Us
          </button></a>
        </div>
      </div>
    </div>
    <div className="hero h-full bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
      <div className="hero-content  flex flex-col lg:flex-row-reverse">
        <img
          src={image_4}
          className="max-w-[150px] md:max-w-sm rounded-lg w-[100%]  shadow-2xl flex-1 p-5 md:ml-8"
        />
        <div className="">
          <h1 className="text-xl md:text-4xl font-bold">Habbe Suranjana</h1>
          <p className="py-6 hidden md:block">
            An exceptional natural medicine for general weakness,
            <br /> sperm enhancement, and nerve stimulation.
            <br />
            <br />
            For patient suffering from: <br />
            1. Semiuria <br />
            2. Spermatorrhea <br />
            3. Sexual Debility <br />
            4. General Debility <br />
            5. Nervous Debility <br />
            6. Mental Fatigue <br />
            <br />
            <br />
            Consultation with a specialist doctor or hakim is recommended.
          </p>
          <a href=""><button className="btn btn-primary hidden md:block">
            Contact Us
          </button></a>
        </div>
      </div>
    </div>
    <div className="hero h-full bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
      <div className="hero-content  flex flex-col lg:flex-row-reverse">
        <img
          src={image_5}
          className="max-w-[150px] md:max-w-sm rounded-lg w-[100%]  shadow-2xl flex-1 p-5 md:ml-8"
        />
        <div className="">
          <h1 className="text-xl md:text-4xl font-bold">Sharabat-Buyuri</h1>
          <p className="py-6 hidden md:block">
            Preventive measures against kidney disease require conscious
            <br />
            adherence to certain rules.
            <br />
            <br />
            Functionality: <br />
            1. Diabetes identification and control. <br />
            2. High blood pressure identification and control. <br />
            3. Maintaining a healthy body weight. <br />
            4. Regular physical exercise. <br />
            5. Consumption of fresh vegetables and fruits. <br />
            6. Avoiding high-sodium foods. <br />
            7. Drinking an adequate amount of water. <br />
            <br />
            <br />
            For patient suffering from: <br />
            1. Strangury <br />
            2. Absent menstruation <br />
            3. Jaundice <br />
            4. Inflammatory fever <br />
            5. Involuntary urination <br />
            <br />
            <br />
            Consultation with a specialist doctor or hakim is recommended.
          </p>
          <a href=""><button className="btn btn-primary hidden md:block">
            Contact Us
          </button></a>
        </div>
      </div>
    </div>
    <div className="hero h-full bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
      <div className="hero-content  flex flex-col lg:flex-row-reverse">
        <img
          src={image_6}
          className="max-w-[150px] md:max-w-sm rounded-lg w-[100%]  shadow-2xl flex-1 p-5 md:ml-8"
        />
        <div className="">
          <h1 className="text-xl md:text-4xl font-bold">Tila Mojluk</h1>
          <p className="py-6 hidden md:block">
            Functionality: Effective in treating male impotence and curvature.
            <br />
            <br />
            Instructions for use: Use as needed or as directed by
            <br /> a healthcare professional.
            <br />
            <br />
            Precautions: May cause irritation during application. In such cases,{" "}
            <br />
            discontinue use temporarily and apply ghee or butter to the affected
            area. <br />
            Resume use when the condition improves. Keep away from <br />
            the reach of children and store in a cool and dry place.
          </p>
          <a href=""><button className="btn btn-primary hidden md:block">
            Contact Us
          </button></a>
        </div>
      </div>
    </div>
    <div className="hero h-full bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
      <div className="hero-content  flex flex-col lg:flex-row-reverse">
        <img
          src={image_7}
          className="max-w-[150px] md:max-w-sm rounded-lg w-[100%]  shadow-2xl flex-1 p-5 md:ml-8"
        />
        <div className="">
          <h1 className="text-xl md:text-4xl font-bold">Nanakha</h1>
          <p className="py-6 hidden md:block">
            Source: Bangladesh National Unani Formulary (Unani Medicine)
            <br />
            <br />
            Functionality: Effective in treating flatulence, <br /> gas-related
            stomach pain, and weak digestion.
            <br />
            <br />
            Dosage: Take 2-4 teaspoons daily, 2-3 times a day, or as directed
            <br /> aby a healthcare professional.
            <br />
            <br />
            Precautions: Store in a cool and dry place away from direct
            sunlight. <br /> Keep out of reach of children. Shake the bottle
            well before consumption.
          </p>
          <a href=""><button className="btn btn-primary hidden md:block">
            Contact Us
          </button></a>
        </div>
      </div>
    </div>
    <div className="hero h-full bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
      <div className="hero-content  flex flex-col lg:flex-row-reverse">
        <img
          src={image_8}
          className="max-w-[150px] md:max-w-sm rounded-lg w-[100%]  shadow-2xl flex-1 p-5 md:ml-8"
        /> 
        <div className="">
          <h1 className="text-xl md:text-4xl font-bold">Deenar</h1>
          <p className="py-6 hidden md:block">
            Functionality: Effective in treating liver inflammation, jaundice,
            <br /> obstructive jaundice, inflammation, bronchitis, pneumonia,{" "}
            <br /> indigestion, and gastrointestinal disorders.
            <br />
            <br />
            Dosage: For adults: Take 2-4 teaspoons daily, 1-2 times a day.
            <br /> For children: Take 1-2 teaspoons daily, once a day. <br />
            Or as directed by a healthcare professional.
            <br />
            <br />
            Precautions: Store in a cool and dry place away from direct
            sunlight.
            <br /> Keep out of reach of children. Shake the bottle well before
            consumption.
          </p>
          <a href=""><button className="btn btn-primary hidden md:block">
            Contact Us
          </button></a>
        </div>
      </div>
    </div>
  </AutoplaySlider>
</div>
);

const Product = () => {
  return <div>{slider}</div>;
};

export default Product;
