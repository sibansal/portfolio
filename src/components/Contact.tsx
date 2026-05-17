import { socialLinks, personalInfo } from "./../data/PortfolioData";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent">
          Let's Build Something Great
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Ready to discuss your next project or collaboration opportunity?
          <br />
          Feel free to reach out through any of these channels.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-blue-400 hover:text-blue-300 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <div className="text-gray-300">{personalInfo.location}</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Connect with me
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 flex flex-col items-center justify-center transition-colors"
                >
                  <div className="text-3xl mb-3">{link.icon}</div>
                  <div className="font-medium text-lg">{link.platform}</div>
                  <div className="text-gray-400 text-sm mt-1">
                    Click to connect
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Download Resume</h3>
              <p className="text-gray-300 mb-6">
                For detailed experience and complete work history
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/Simran_Bansal_FullStack_Engineer_JAVA_Python_FrontEndFocused_4Y.pdf"
                  download
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download PDF Resume
                </a>
                <a
                  href="https://linkedin.com/in/sibansal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-400 hover:bg-blue-900/30 font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  <span className="mr-2">💼</span>
                  View LinkedIn Profile
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Attached resume contains detailed project experience,
                achievements, and technical skills
              </p>
            </div>
          </div>

          {/* Quick Contact Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-300">
              I typically respond to emails within 24 hours. For urgent matters,
              please call or message on Telegram.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-400">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for freelance projects
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Open to full-time opportunities
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Willing to relocate for right opportunity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
