"use client";

import { useState, useEffect } from "react";
import { companies } from "./../data/PortfolioData";

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + companies.length) % companies.length,
    );
  };

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Worked With
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {companies.map((company) => (
                <div key={company.id} className="w-full shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-64 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_ease-in-out_infinite]">
                      <div className="text-2xl font-bold text-blue-600">
                        {company.name.charAt(0)}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {company.name}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {company.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous company"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next company"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">
            All Companies & Organizations
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white px-6 py-3 rounded-full border border-gray-200 hover:border-blue-400 transition-colors"
              >
                <span className="text-gray-800 font-medium animate-[fadeIn_0.5s_ease-out]">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;
