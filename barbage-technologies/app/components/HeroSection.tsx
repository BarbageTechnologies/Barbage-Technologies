import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing Font Awesome icons

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white p-10 text-center">
      <h1 className="text-5xl font-bold">Welcome to Barbage Technologies</h1>
      <p className="mt-4">Innovative software solutions for your business needs.</p>
      <a
        href="#services"
        className="mt-6 inline-block bg-white text-blue-600 px-4 py-2 rounded"
      >
        Explore Our Services
      </a>

      {/* Social Media Links */}
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/simon-keya-9ab441237/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-blue-500 hover:text-blue-700"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/BarbageTechnologies/Barbage-Technologies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-300 hover:text-white"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
