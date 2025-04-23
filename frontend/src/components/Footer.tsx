import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        {/* Left side: Company Info */}
        <div>
          <p className="text-lg font-semibold">Cheated.xyz</p>
          <p className="text-sm text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Cheated.xyz. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-8">
          <a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a>
          <a href="#features" className="text-gray-400 hover:text-white transition duration-300">Features</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
          <a href="#privacy" className="text-gray-400 hover:text-white transition duration-300">Privacy</a>
        </div>

        {/* Right side: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Footer Bottom: Quick Info */}
      <div className="max-w-screen-xl mx-auto px-6 mt-4 text-center text-gray-400 text-sm">
        <p>Built with ❤️ using Next.js and Monaco Editor.</p>
      </div>
    </footer>
  );
};

export default Footer;
