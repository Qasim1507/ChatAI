import Lottie from "lottie-react";
import Coding from "../assets/coding.json";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl md:text-6xl lg:text-7xl text-center tracking-wide font-medium">
        Introducing ChatAI -
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          The Developer Tool
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        ChatAI is an AI coding assistant you can talk to like a teammate. Ask it
        to explain unfamiliar code, track down a bug, or sketch out a new
        feature, and keep refining the answer with follow-up questions.
      </p>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        Spend less time searching docs and more time shipping. Get started for
        free — no credit card required.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="w-[55%] flex justify-center">
        <Lottie loop={true} animationData={Coding} />
      </div>
    </div>
  );
};

export default Hero;
