import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { data } from "../../data/data.jsx";
const nav = [
  {
    id: 1,
    title: "Home",
    icon: "home",
    link: "#home",
  },

  {
    id: 2,
    title: "About",
    icon: "user",
    link: "#about",
  },

  {
    id: 3,
    title: "Skills",
    icon: "file",
    link: "#skills",
  },

  {
    id: 4,
    title: "Services",
    icon: "briefcase-alt-2",
    link: "#services",
  },

  {
    id: 6,
    title: "Portfolio",
    icon: "image",
    link: "#portfolio",
  },

  {
    id: 7,
    title: "Contact",
    icon: "paper-plane",
    link: "#contact",
  },
];
const Header = () => {
  // state of navbar toggle in mobile screen.
  const [toggle, handleToggle] = useState(true);

  // the function handing toggling of the navbar in mobile.
  const showMenu = (toggle) => handleToggle(!toggle);
  return (
    <header className="container header w-[100%]  bg-body  z-40 fixed bottom-0 md:relative">
      <nav className="nav  h-[calc(var(--header-height)+1.5rem)] md:h-[calc(var(--header-height)+1.5rem)] flex justify-between items-center column-gap-[1rem] ">
        <a href="" className="nav__logo text-title font-medium">
          {data.home.shortName}
        </a>

        <div
          className={`nav__menu  mx-auto top-8 left-5 rounded-xl lg:rounded-none w-[90%] border-1 border-gray-300 lg:border-none   md:w-auto bg-body fixed  pb-[2rem] px-[1.5rem] pt-[4rem] md:p-0 shadow-[35px_35px_35px_rgba(0,0,0,0.4)] md:shadow-none  ${
            toggle ? "sr-only" : "not-sr-only"
          } md:not-sr-only`}
        >
          <ul className="nav__list grid grid-cols-3 md:flex gap-x-[2rem] ">
            {nav.map((item) => (
              <li key={item.id} className="nav__item">
                <a
                  href={item.link}
                  className="nav__link flex-col-center text-small duration-300 text-title font-medium hover:text-title-dark"
                >
                  <i
                    className={`bx bx-${item.icon} mr-1.5 md:sr-only not-sr-only text-[1.2rem] `}
                  ></i>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="bx bx-x mr-1.5 absolute right-[1.3rem] top-[1.3rem] text-[1.5rem] cursor-pointer text-title hover:text-title-dark md:sr-only not-sr-only :border-1 border-gray-400 rounded-full"
            onClick={() => {
              showMenu(toggle);
            }}
          ></i>
        </div>

        <div className="nav__toggle md:hidden block text-title font-medium ">
          <i
            className="bx bx-category  mr-1.5 "
            onClick={() => {
              showMenu(toggle);
            }}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
