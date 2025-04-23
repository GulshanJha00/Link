import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#011936] text-white py-8 border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        {/* Left side: Company Info */}
        <div>
          <p className="text-lg font-semibold text-[#F9DC5C]">Cheated.xyz</p>
          <p className="text-sm text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Cheated.xyz. All rights... and I mean ALL rights reserved.
          </p>
        </div>

        <div className="flex space-x-8">
          <Link href="#about" className="text-gray-400 hover:text-white transition duration-300">About</Link>
          <Link href="#features" className="text-gray-400 hover:text-white transition duration-300">Features</Link>
          <Link href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link>
        </div>

        {/* Right side: Social Icons */}
        <div className="flex space-x-6">
          <Link
            href="https://github.com/GulshanJha00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://x.com/GulshanJha0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gulshankumar0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>

      {/* Footer Bottom: Quick Info */}
      <div className="max-w-screen-xl mx-auto px-6 mt-4 text-center text-gray-400 text-sm">
      <p className="text-[#F9DC5C]">Get used to it. This is Cheated.xyz, and we mean business.</p>

      </div>
    </footer>
  );
};

export default Footer;
