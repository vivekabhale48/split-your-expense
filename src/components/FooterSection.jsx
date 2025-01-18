import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Description */}
          <div className="lg:w-1/2">
            <p className="text-gray-300 text-sm">
              Our application simplifies expense sharing among friends, family, and teams. 
              Keep track of all your shared expenses, settle balances, and focus on what really matters.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 lg:mt-0">
            <a
              href="https://www.instagram.com/_v_i_v_s/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/vivekabhale48"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://x.com/vivek_abhale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vivekabhale48"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="/howtouse"
                  className="hover:underline hover:text-gray-300"
                >
                  How to Use
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/support" className="hover:underline hover:text-gray-300">
                  Support/FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="hover:underline hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link to="/about" className="hover:underline hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/careers" className="hover:underline hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/invest" className="hover:underline hover:text-gray-300">
                  Invest
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="/terms-of-service"
                  className="hover:underline hover:text-gray-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:underline hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <p className="text-sm">
              Stay updated on the latest features and updates!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your App Name. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              to="/terms-of-service"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
