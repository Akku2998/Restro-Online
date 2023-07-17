import React from "react";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer className="bg-gray-50 py-8 px-4">
        <div className="flex items-center justify-center">
          <div className="w-1/4">
            <img
              src="./footer-leaf.png"
              alt="Logo"
              className="h-120 w-200 ml-16"
            />
          </div>
          <div className="w-2/4 text-center">
            <h1 className="text-lg font-semibold text-gray-600">
              Get Notified
            </h1>
            <h1 className="text-lg font-semibold text-gray-600">
              about new amazing products
            </h1>
            <div className="mt-8">
              <p className="mt-4 text-sm text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industy.
              </p>
              <p className="text-sm text-gray-500">
                It has been the industry's standard dummy text ever since.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-400 rounded-full px-4 py-2 h-8 pr-10"
                />
                <img src="/arrow.svg" className="ml-2" alt="Arrow" />
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <ul className="flex items-center space-x-16">
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Learn more
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm">
                    Get in touch
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex items-center ml-4">
                <a
                  href="#"
                  className="text-xl text-gray-600 mx-4 hover:text-blue-500"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-xl text-gray-600 mx-4 hover:text-blue-500"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-xl text-gray-600 mx-4 hover:text-blue-500"
                >
                  <FaInstagram />
                </a>
                <h3 className="text-gray-500 text-sm">
                  e 2022 Techverse World.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
