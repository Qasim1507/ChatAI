import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Free",
      price: "$0",
      features: [
        "50 messages per day",
        "Code explanations and debugging help",
        "Standard response speed",
        "Community support",
      ],
    },
    {
      title: "Pro",
      price: "$10",
      features: [
        "Unlimited messages",
        "Priority access during peak times",
        "Longer conversations and file uploads",
        "Editor plugins and API access",
        "Early access to new features",
      ],
    },
    {
      title: "Enterprise",
      price: "$200",
      features: [
        "Shared team workspaces",
        "Your data is never used for training",
        "Single sign-on and admin controls",
        "Usage analytics and dedicated support",
      ],
    },
  ];

  return (
    <div
      id="pricing"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Pricing
        </span>
      </div>
      <div className="flex flex-wrap mt-10">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-2 flex items-stretch"
          >
            <div className="p-10 border border-neutral-700 rounded-xl flex flex-col flex-1">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul className="flex-grow">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-blue-900 border border-blue-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
