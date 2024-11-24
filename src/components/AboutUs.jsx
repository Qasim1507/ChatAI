import team from "../assets/team.jpg";
import color from "../assets/color.jpg";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="relative mt-20 border-neutral-800 flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          About Us
        </span>
      </div>
      <p className="mt-10 text-xl text-center text-neutral-400 max-w-4xl px-4">
        ChatAI is an AI research and deployment company. Our mission is to
        ensure that artificial general intelligence benefits all of humanity.
      </p>
      <img
        className="mt-10 w-full h-auto object-cover"
        src={team}
        alt="Team"
      />
      <span className="mt-10 text-xl md:text-2xl lg:text-3xl text-center tracking-wide px-4">
        We are building safe and beneficial AGI, but will also consider our
        mission fulfilled if our work aids others to achieve this outcome.
      </span>

      {/* Updated Section with Increased Height */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 min-h-[500px]">
        <div className="md:w-1/2 text-neutral-400 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Our Structure
          </h2>
          <p className="text-lg leading-relaxed">
            We are governed by a nonprofit and our unique capped-profit model
            drives our commitment to safety. This means that as AI becomes more
            powerful, we can redistribute profits from our work to maximize the
            social and economic benefits of AI technology.
          </p>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 h-[400px] w-[400px] object-fill overflow-clip rounded-lg shadow-lg">
          <img
            className="object-contain object-center  "
            src={color}
            alt="Our Structure"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
