import React from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className="flex justify-between items-center max-container">
        <img src={headerLogo} alt="header logo" width={129} height={29} />

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-slate-gray font-montserrat text-lg leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 font-montserrat text-lg leading-normal font-medium max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
