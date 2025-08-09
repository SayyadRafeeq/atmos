import React from "react";

const Footer = () => {
  return (
    // Footer section with gray background and white text
    <>
      <footer className="relative bg-gray-900 text-white p-8 text-center">
        {/* Copyright text */}
        <p className="text-sm text-gray-400">
          © 2025 ATMOS. <br className="hidden lg:block" />
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
