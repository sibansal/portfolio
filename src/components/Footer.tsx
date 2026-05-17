const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-8 animate-[fadeInUp_0.6s_ease-out]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full">
                <img
                  src="/dp.jpg"
                  className="w-full h-full object-cover rounded-full"
                  alt="Simran Bansal"
                />
              </div>
              <div className="text-xl font-bold text-white">Simran Bansal</div>
            </div>
            <p className="text-sm mt-2">Frontend-Focused Full-Stack Engineer</p>
          </div>

          <div className="text-center md:text-right">
            <p className="mb-2 animate-[typing_3s_steps(40,end)]  border-gray-600">
              Thanks for visiting. Attached is my resume for detailed
              experience.
            </p>
            <p className="text-sm">
              © {currentYear} Simran Bansal. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">Built with ❤️ by Simran Bansal </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
