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
        We've trained a model called ChatAI which interacts in a conversational
        way. The dialogue format makes it possible for ChatAI to answer followup
        questions, admit its mistakes, challenge incorrect premises, and reject
        inappropriate requests.
      </p>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        We are excited to introduce ChatAI to get users' feedback and learn
        about its strengths and weaknesses. During the research preview, usage
        of ChatAI is free.
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Documentation
        </a>
      </div>
    </div>
  );
};

export default Hero;
