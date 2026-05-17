import { skillCategories } from "./../data/PortfolioData";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Technical Expertise
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive skills spanning frontend, backend, DevOps, and soft
          skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animate-[fadeInUp_0.6s_ease-out}"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-2 rounded-lg text-sm font-medium
                      transition-all duration-200 hover:scale-105 animate-[scaleIn_0.3s_ease-out]
                      ${
                        category.category === "Soft Skills"
                          ? "bg-green-100 text-green-800"
                          : category.category === "Frontend"
                            ? "bg-blue-100 text-blue-800"
                            : category.category === "Backend"
                              ? "bg-purple-100 text-purple-800"
                              : category.category === "DevOps & Cloud"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-gray-100 text-gray-800"
                      }`}
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
