const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-[fadeInUp_0.8s_ease-out]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="shrink-0">
                <div className="w-48 h-48 bg-linear-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-4xl">
                    <img
                      src="/dp.jpg"
                      className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700"
                      alt="Simran Bansal"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6 text-lg animate-[fadeInRight_0.6s_ease-out_0.2s_both]">
                    Since my childhood, I've had a deep passion for technology
                    which drove me to pursue technical education. My thirst for
                    knowledge and growth in this field has only intensified over
                    time.
                  </p>

                  <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-xl animate-[fadeInRight_0.6s_ease-out_0.4s_both]">
                    "If I am 1, then a team of two is 11, and three is 111.
                    Together, we can accomplish great things."
                  </blockquote>

                  <p className="text-gray-700 mb-6">
                    However, I've come to realize that technology is not just
                    about me, but about us. A good working system involves
                    hundreds and thousands of components working together as a
                    team to achieve a common goal.
                  </p>

                  <p className="text-gray-700 mb-6">
                    When it comes to my projects, I believe in expression rather
                    than just leaving an impression. That's why I often build
                    them from scratch, resulting in a 70% success rate as of
                    now.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-xl my-8">
                    <h3 className="font-bold text-gray-900 mb-4">
                      My Philosophy
                    </h3>
                    <p className="text-gray-700">
                      Technology should empower collaboration. I thrive in
                      environments where individual strengths combine to create
                      solutions greater than the sum of their parts.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Quick Facts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-green-600">🎓</span>
                        </div>
                        <div>
                          <div className="font-medium">Education</div>
                          <div className="text-gray-600">
                            M.Tech & B.Tech in Computer Science
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600">💼</span>
                        </div>
                        <div>
                          <div className="font-medium">Experience</div>
                          <div className="text-gray-600">
                            4+ Years Full-Stack Development
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-purple-600">📍</span>
                        </div>
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-gray-600">
                            Bangalore, Karnataka
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-yellow-600">🌟</span>
                        </div>
                        <div>
                          <div className="font-medium">Focus</div>
                          <div className="text-gray-600">
                            React.js & Frontend Excellence
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
