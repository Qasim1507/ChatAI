import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Assistance with writing, problem solving and more",
        "Access to GPT-4o mini",
        "Limited access to data analysis, file uploads",
        "Limited access to GPT-4o",
        "Use custom GPTs",
      ],
    },
    {
      title: "Plus",
      price: "$10",
      features: [
        "Access to OpenAI o1-preview, OpenAI o1-mini",
        "Up to 5x more messages for GPT-4o",
        "Access to Advanced Voice Mode",
        "DALL·E image generation",
        "Early access to new features",
      ],
    },
    {
      title: "Enterprise",
      price: "$200",
      features: [
        "Create and share GPTs with your workspace",
        "Enterprise data excluded from training by default.",
        "Expanded context window for longer inputs",
        "Admin controls, domain verification, and analytics",
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
