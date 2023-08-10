import React, { useState } from "react";
import { BsSun } from "react-icons/bs";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-screen py-2 left-0 border-b border-gray-500 border-dashed">
      <div className="flex items-center justify-between p-2">
        {/* Left */}
        <div className="ml-10 self-center text-2xl whitespace-nowrap font-bold">
          <a href="/">Decorar</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
