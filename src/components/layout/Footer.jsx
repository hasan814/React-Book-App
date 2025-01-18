const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 rounded-tl-lg rounded-tr-lg">
      <div className="container mx-auto text-center">
        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="/privacy-policy"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BookApp. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://twitter.com" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-blue-400 transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-blue-400 transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.127C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-blue-400 transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728v20.543C0 23.226.79 24 1.77 24H22.23c.983 0 1.77-.774 1.77-1.728V1.728C24 .774 23.213 0 22.23 0zM7.119 20.452H3.577V9.028h3.542v11.424zM5.348 7.576a2.049 2.049 0 1 1 0-4.098 2.049 2.049 0 0 1 0 4.098zm15.104 12.876h-3.54v-5.595c0-1.333-.025-3.047-1.856-3.047-1.857 0-2.14 1.451-2.14 2.951v5.691h-3.54V9.028h3.4v1.561h.048c.474-.9 1.633-1.852 3.364-1.852 3.6 0 4.265 2.368 4.265 5.448v6.267z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
