import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="relative grid grid-cols-2 items-center lg:grid-cols-3">
          {/* Left links */}
          <ul className="flex items-center space-x-8 lg:flex">
            <li>
              <a
                href="#"
                className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Logo */}
          <a href="#" className="inline-flex items-center lg:mx-auto">
            <img
              src="./public/logo-no-background.png"
              alt="logo"
              className="W-3 h-15"
            ></img>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"></span>
          </a>

          {/* Mobile menu button */}
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              className="focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
              type="button"
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            {/* Mobile menu dropdown */}
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="rounded border bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <a href="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Dev-J0
                      </span>
                    </a>
                    <button
                      aria-label="Close Menu"
                      className="rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200"
                      onClick={() => setIsMenuOpen(false)}
                      type="button"
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6 5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3-6.3,6.3c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3 6.3,6.3c0.2,0.2 0.5,0.3 0.7,0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L13.4,12l6.3-6.3C20.1,5.3 20.1,4.7 19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          className="font-medium text-gray-700 hover:text-purple-600"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-medium text-gray-700 hover:text-purple-600"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-medium text-gray-700 hover:text-purple-600"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-medium text-gray-700 hover:text-purple-600"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
