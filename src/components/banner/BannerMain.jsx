import React from "react";
// import myImage from "/profile-img-square.jpg";
import { data } from "../../data/data.jsx";
import "../../App.css";

const myImage = data.home.bannerImage;
// const homeData = data.home;

export const BannerMain = () => {
  return (
    <section
      id="home"
      className="container grid grid-cols-1 h-auto  md:grid-cols-[auto_1fr_1fr] md:gap-x-12 lg:gap-x-28  h-[80vh] md:my-28"
    >
      {/* SOCIAL LINKS SIDE */}
      <ul className="inline-grid h-1/3 my-auto md:flex-col-center gap-y-4 text-[1.5rem] text-title">
        <li className="">
          <a
            href={`https://api.whatsapp.com/send?phone=${data.contacts.whatsapp.link}&text=Hello`}
            target="_blank"
          >
            <box-icon
              className="text-3xl"
              size="sm"
              color="var(--color-title-dark)"
              type="logo"
              name="whatsapp"
            ></box-icon>
          </a>
        </li>

        <li className="">
          <a href={data.contacts.linkedIn} target="_blank">
            <box-icon size="sm" type="logo" name="linkedin"></box-icon>
          </a>
        </li>

        <li className="">
          <a href={data.contacts.github} target="_blank">
            <box-icon size="sm" type="logo" name="github"></box-icon>
          </a>
        </li>
      </ul>

      {/* HERO TEXT */}
      <div className="flex-col-center items-start gap-y-3 mt-6 md:mt-0 order-3 md:order-2">
        <h2 className="text-4xl">
          {/* <span className="sr-only md:not-sr-only">Muhammad</span> */}
          <span className="">{data.home.fullName.split(" ")[0]}</span>{" "}
          {data.home.fullName.split(" ")[1]}
        </h2>
        <div className="flex-row-center gap-4 font-semibold ">
          <hr className="w-16 border-1.5" />
          <h6>{data.qualifications.cards[0].title}</h6>
        </div>
        <p className="text-justif">{data.home.intro}</p>
        <a
          href="#contact"
          className="button flex-row-center gap-1 mt-3 text-white"
        >
          <span className="mr-1">Say Hello</span>
          <box-icon name="paper-plane" type="solid" color="#f5f4f4"></box-icon>
        </a>
      </div>

      {/* IMAGE */}
      <div className="order-2 md:order-3 col-span-2 md:col-span-1 h-full flex-col-center">
        <img
          className="shadow-[0_35px_35px_rgba(0,0,0,0.4)] border-8 border-gray-700 h-[16rem] home__img "
          src={myImage}
          alt="profile-img"
        />
      </div>
    </section>
  );
};
