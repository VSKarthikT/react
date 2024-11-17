const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-6">
      {/* Main Footer Content */}
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6 space-y-4 md:space-y-0">
        {/* Copyright Section */}
        <div className="text-center md:text-left text-sm md:text-base font-semibold">
          © 2024 GrubDash. All rights reserved.
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left text-sm md:text-base">
          <p className="uppercase font-medium">
            Address: 187 Knoxville Ave, Peoria, Illinois
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left text-sm md:text-base">
          <p className="font-medium">Contact: +1 (897)-563-8765</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 mt-4 pt-4"></div>

      {/* Social Links */}
      <div className="container mx-auto flex justify-center space-x-10 text-sm">
        <a href="#" className="hover:text-gray-200 transition duration-300">
          Facebook
        </a>
        <a href="#" className="hover:text-gray-200 transition duration-300">
          Twitter
        </a>
        <a href="#" className="hover:text-gray-200 transition duration-300">
          Instagram
        </a>
        <a href="#" className="hover:text-gray-200 transition duration-300">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
