import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Barbage Technologies</h2>
            <p>Your one-stop solution for innovative software.</p>
          </div>
          <div className="flex flex-col md:flex-row space-x-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                <li>
                  <span className="footer-link">Home</span>
                </li>
                <li>
                  <span className="footer-link">About Us</span>
                </li>
                <li>
                  <span className="footer-link">Services</span>
                </li>
                <li>
                  <span className="footer-link">Projects</span>
                </li>
                <li>
                  <span className="footer-link">Contact Us</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p>Email: barbagetechnologies78@gmail.com</p>
              <p>Phone: +254 7904 448 452</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Barbage Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;