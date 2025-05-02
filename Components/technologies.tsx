const technologies = [
    {
      name: "React.js",
      level: 95,
      description: "Building interactive user interfaces with the most popular JavaScript library",
    },
    {
      name: "Next.js",
      level: 90,
      description: "Creating fast, SEO-friendly applications with server-side rendering",
    },
    {
      name: "TypeScript",
      level: 85,
      description: "Developing type-safe applications for better code quality",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      description: "Crafting beautiful, responsive designs with utility-first CSS",
    },
    {
      name: "Shopify",
      level: 80,
      description: "Building custom e-commerce solutions and themes",
    },
    {
      name: "WordPress",
      level: 85,
      description: "Creating custom themes and plugins for the world's most popular CMS",
    },
    {
      name: "Flutter",
      level: 75,
      description: "Developing cross-platform mobile applications",
    },
    {
      name: "Deployment",
      level: 90,
      description: "Setting up CI/CD pipelines and managing cloud infrastructure",
    },
  ]
  
  export default function Technologies() {
    return (
      <section id="technologies" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">
              We use cutting-edge technologies to build fast, scalable, and maintainable applications that meet your
              business needs.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                  <span className="text-sm font-medium text-primary">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-3">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  