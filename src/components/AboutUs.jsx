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
        ChatAI is built by a small team of developers who got tired of
        switching between docs, forums and their editor. Our mission is to put
        a knowledgeable coding partner one question away.
      </p>
      <img
        className="mt-10 w-full h-auto rounded-lg object-cover"
        src={team}
        alt="Team"
      />
      <span className="mt-10 text-xl md:text-2xl lg:text-3xl text-center tracking-wide px-4">
        We believe great tools should make developers faster without getting
        in the way.
      </span>

      {/* Updated Section with Increased Height */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 min-h-[500px]">
        <div className="md:w-1/2 text-neutral-400 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            How We Work
          </h2>
          <p className="text-lg leading-relaxed">
            We ship small improvements every week and shape the roadmap around
            feedback from the people who use ChatAI daily. Privacy comes first:
            your code is processed only to answer your question and is never
            sold or shared.
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
