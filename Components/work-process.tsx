import React from "react";
import Image from "next/image";
import {
  SearchCheck,
  PenTool,
  Code,
  ShieldCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and project requirements. This helps us create a strategic roadmap for your project.",
    position: "right",
    icon: SearchCheck,
  },
  {
    title: "Design & Prototyping",
    description:
      "We create wireframes and interactive prototypes to visualize the user interface before moving to development.",
    position: "left",
    icon: PenTool,
  },
  {
    title: "Development",
    description:
      "Our developers write clean, efficient code following best practices and industry standards. We use modern technologies to ensure scalability and performance.",
    position: "right",
    icon: Code,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing of all aspects of your project to ensure it works flawlessly across different devices and browsers.",
    position: "left",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Launch",
    description:
      "We handle the deployment process to ensure a smooth launch, setting up proper hosting, security, and monitoring.",
    position: "right",
    icon: Rocket,
  },
  {
    title: "Support & Maintenance",
    description:
      "We provide ongoing support and maintenance to keep your project running smoothly and up-to-date with the latest technologies.",
    position: "left",
    icon: LifeBuoy,
  },
];

export default function TimelineSteps() {
  return (
    <section id='workprocess' className="sm:py-20 py-8 bg-[#F6F9FC]">
      <div className="container mx-auto px-4">
        <div className="text-center sm:mb-16 mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D1D1D]">
            Our Process
          </h2>
        </div>

        <div className="relative sm:grid hidden grid-cols-1 lg:grid-cols-3 sm:gap-12 gap-5 items-center">
          {/* Left side */}
          <div className="sm:space-y-10 space-y-5">
            {steps
              .filter((step) => step.position === "left")
              .map(({ title, description, icon: Icon }, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4"
                >
                  <div className="p-3 bg-[var(--primaryDarkGreen)] rounded-lg text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#1D1D1D]">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Center Hexagon Image */}
          <div className="flex justify-center relative">
            <div className="w-[500px] h-[500px] relative z-10">
              <Image
                src="/developmentProcess.jpeg"
                alt="Hexagon Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="sm:space-y-10 space-y-5">
            {steps
              .filter((step) => step.position === "right")
              .map(({ title, description, icon: Icon }, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4"
                >
                  <div className="p-3 bg-[var(--primaryDarkGreen)] rounded-lg text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#1D1D1D]">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="sm:space-y-10 space-y-5 sm:hidden flex flex-col">
          {steps
            .map(({ title, description, icon: Icon }, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4"
              >
                <div className="p-3 bg-[var(--primaryDarkGreen)] rounded-lg text-white">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl text-[#1D1D1D]">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
