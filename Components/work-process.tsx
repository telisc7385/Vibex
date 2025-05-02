export default function WorkProcess() {
    const steps = [
      {
        title: "Discovery & Planning",
        description:
          "We start by understanding your business goals, target audience, and project requirements. This helps us create a strategic roadmap for your project.",
        position: "right",
      },
      {
        title: "Design & Prototyping",
        description:
          "We create wireframes and interactive prototypes to visualize the user interface before moving to development.",
        position: "left",
      },
      {
        title: "Development",
        description:
          "Our developers write clean, efficient code following best practices and industry standards. We use modern technologies to ensure scalability and performance.",
        position: "right",
      },
      {
        title: "Testing & Quality Assurance",
        description:
          "Rigorous testing of all aspects of your project to ensure it works flawlessly across different devices and browsers.",
        position: "left",
      },
      {
        title: "Deployment & Launch",
        description:
          "We handle the deployment process to ensure a smooth launch, setting up proper hosting, security, and monitoring.",
        position: "right",
      },
      {
        title: "Support & Maintenance",
        description:
          "We provide ongoing support and maintenance to keep your project running smoothly and up-to-date with the latest technologies.",
        position: "left",
      },
    ]
  
    return (
      <section id="process" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures clear communication and exceptional results for every project.
            </p>
          </div>
  
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
  
            {/* Timeline steps */}
            <div className="relative">
              {steps.map((step, index) => (
                <div key={index} className="mb-16 relative">
                  <div className="flex items-center">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                        {index + 1}
                      </div>
                    </div>
  
                    {/* Content */}
                    <div className={`w-full grid grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "direction-rtl"}`}>
                      {step.position === "left" ? (
                        <>
                          <div className="text-right pr-12 md:pr-16">
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                          </div>
                          <div></div>
                        </>
                      ) : (
                        <>
                          <div></div>
                          <div className="pl-12 md:pl-16">
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  