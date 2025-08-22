import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex max-lg:flex-col items-start gap-20">
        <div className="flex flex-col gap-5">
          <img src={footerLogo} alt="footer logo" width={157} height={45} />
          <p className="text-white-400 leading-7 font-montserrat max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size in Store. Get Rewards
          </p>

          <div className="flex gap-6 mt-2">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="bg-white w-12 h-12 flex justify-center items-center rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-between flex-wrap lg:gap-10 gap-20">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-montserrat mb-5 text-2xl font-medium">
                {section.title}
              </h3>

              <ul>
                {section.links.map((link, i) => (
                  <li
                    className="text-white-400 mt-3 font-montserrat hover:text-slate-gray"
                    key={i}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex max-sm:flex-col items-center justify-between">
        <div className="flex gap-2">
          <img src={copyrightSign} alt="copy sign" width={24} height={24} />
          <p className="text-white-400 font-montserrat cursor-pointer">
            Copyright. All rights reserved
          </p>
        </div>

        <div>
          <p className="text-white-400 font-montserrat cursor-pointer">
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
