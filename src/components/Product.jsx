import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import image_3 from "../assets/image-3.jpeg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={4000}
  >
    <div className="hero h-full bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
      <div className="hero-content  flex flex-col lg:flex-row-reverse">
        <img

          src={image_3}
          className="max-w-[200px] md:max-w-sm rounded-lg w-[100%]  shadow-2xl flex-1 p-5 md:ml-8"
        />
        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold">Habbe Suranjan</h1>
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
          <button className="btn btn-primary hidden md:block">Get Started</button>
        </div>
      </div>
    </div>
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AutoplaySlider>
);

const Product = () => {
  return <div>{slider}</div>;
};

export default Product;
