import { BotMessageSquare, BatteryCharging, Fingerprint, ShieldHalf, PlugZap, GlobeLock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BotMessageSquare />,
      text: "Drag-and-Drop Interface",
      description:
        "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
      icon: <Fingerprint />,
      text: "Multi-Platform Compatibility",
      description:
        "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
      icon: <ShieldHalf />,
      text: "Built-in Templates",
      description:
        "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
      icon: <BatteryCharging />,
      text: "Real-Time Preview",
      description:
        "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
      icon: <PlugZap />,
      text: "Collaboration Tools",
      description:
        "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
    },
    {
      icon: <GlobeLock />,
      text: "Analytics Dashboard",
      description:
        "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
  ];

  return (
    <div id="features" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl font-medium lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Build you code{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            with ease
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;