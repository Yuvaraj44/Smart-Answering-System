import Hamburger from "hamburger-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropDownOpen, setAboutDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navLinks = [
    { to: "/", label: "Home" },
   
  ];
  const toggleDropdown = (label) => {
    setAboutDropDownOpen(aboutDropDownOpen === label ? null : label);
  };
  return (
    <>
      <div className="flex items-center justify-between gap-4  ">
        <Link to="/">
        </Link>
        <div className="md:hidden block">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
        </div>
      </div>
      <div className={` bg-red-300 ${menuOpen ? "" : ""}`}>
        {menuOpen && (
          <div className="md:hidden  ">
            {navLinks.map((link) => !link.desktopOnly && (
              <div key={link.to} to={link.to} className="relative   ">
                <Link onClick={() => link.dropdown && toggleDropdown(link.label)} className="text-green-300 p-20 flex justify-center "  >
                  {link.label}
                </Link>
                {link.dropdown && aboutDropDownOpen === link.label && (
                  <div className="  mt-3   bg-white    border-gray-200 z-10 ">
                    {link.dropdown.map((dropdownlink) => (
                      <Link key={dropdownlink.to} to={dropdownlink.to} className="block px-4 py-2   hover:bg-gray-100"  >
                        {dropdownlink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <header className="max-w-[80rem] mx-auto px-5 md:block hidden text-white ">
        <div className=" flex justify-between items-center py-5">
          <nav className="" ref={dropdownRef}>
            <div className="space-x-4 md:block hidden">
              {navLinks.map(
                (link) => !link.mobileOnly && (
                  <div key={link.to} to={link.to} className="relative inline-block group "    >
                    <Link onClick={() => link.dropdown && toggleDropdown(link.label)} className="  "    >
                      {link.label}
                    </Link>
                    {link.dropdown && aboutDropDownOpen === link.label && (
                      <div className="absolute left-0 top-full mt-3 w-48 bg-white shadow-lg rounded-md border  border-gray-200 z-10 ">
                        {link.dropdown.map((dropdownlink) => (
                          <Link key={dropdownlink.to} to={dropdownlink.to} className="block px-4 py-2  hover:bg-gray-100"   >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
