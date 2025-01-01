import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing Font Awesome icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Barbage Technologies</h2>
            <p>Your one-stop solution for innovative software.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: simonkeya78@gmail.com</p>
            <p>Phone: +254 7904 448 452</p>
          </div>
        </div>
      </div>

      {/* Social Media Links using <span> */}
      <div className="mt-4 flex justify-center space-x-6">
        <span
          aria-label="LinkedIn Profile"
          className="text-xl text-blue-500 hover:text-blue-700 cursor-pointer"
          onClick={() => window.open("https://www.linkedin.com/in/simon-keya-9ab441237/", "_blank")}
        >
          <FaLinkedin />
        </span>
        <span
          aria-label="GitHub Profile"
          className="text-xl text-gray-300 hover:text-white cursor-pointer"
          onClick={() => window.open("https://github.com/BarbageTechnologies/Barbage-Technologies", "_blank")}
        >
          <FaGithub />
        </span>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Barbage Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
