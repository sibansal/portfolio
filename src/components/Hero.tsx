import { personalInfo } from "./../data/PortfolioData";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-56 h-56 bg-blue-100 rounded-full mb-8">
            <div className="w-full h-full bg-blue-600 rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]">
              <img
                src="/dp.jpg"
                className="w-full h-full object-cover rounded-full p-2"
                alt="Simran Bansal"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            {personalInfo.name}
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            {personalInfo.title}
          </h2>

          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
            Over 4 years of experience in frontend development and backend
            integration, specializing in React.js with supporting experience in
            Python and Java/Spring Boot.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-xl animate-[scaleIn_0.5s_ease-out_0.8s_both]">
              <div className="text-3xl font-bold text-blue-700 mb-2">80%</div>
              <p className="text-gray-700">
                Reduced reporting turnaround time at Nokia
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl animate-[scaleIn_0.5s_ease-out_1s_both]">
              <div className="text-3xl font-bold text-blue-700 mb-2">40%</div>
              <p className="text-gray-700">
                Improved page performance as freelancer
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors animate-[fadeInUp_0.8s_ease-out_1.2s_both]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors animate-[fadeInUp_0.8s_ease-out_1.4s_both]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
