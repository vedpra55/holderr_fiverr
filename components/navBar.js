/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

export default function NavBar() {
  const [isMenu, setMenu] = useState(false);

  const navLinks = [
    {
      icon: "/assets/bnb.svg",
      name: "Binance Smart Chain",
    },
    {
      icon: "/assets/wallet.svg",
      name: "Connect Wallet",
    },
    {
      icon: "/assets/bell.svg",
      name: "Notifications",
    },
    {
      icon: "/assets/user.svg",
      name: "Profile",
    },
  ];

  return (
    <div className="relative font-main px-3 py-3 flex items-center  justify-between">
      <div className="flex items-center gap-x-1">
        <img alt="logo" src="/assets/logo.svg" className="w-16 h-16 " />
        <img alt="logo" src="/assets/Holderr.png" className="w-32  " />
      </div>
      <div className="hidden lg:flex  gap-y-3 mt-3 md:mt-0 items-center gap-x-5">
        {navLinks.map((item, i) => (
          <div
            className=" cursor-pointer flex items-center gap-x-1"
            key={item.name}
          >
            <img
              className={`${i === 0 ? "w-10 h-10" : "w-5 h-5"}`}
              src={item.icon}
              alt={item.name}
            />
            <p className="text-white font-medium">{item.name}</p>
            {i === 0 && (
              <img className="w-3" src="assets/arrow.svg" alt="arrow" />
            )}
          </div>
        ))}
      </div>
      <img
        onClick={() => setMenu(true)}
        alt="menu"
        className="w-10 h-10 lg:hidden"
        src="/assets/menu2.png"
      />
      {isMenu && (
        <div className="lg:hidden absolute inset-0 w-full h-64 py-5 bg-black z-10">
          <div className="flex flex-col justify-center items-center  px-10">
            <div
              onClick={() => setMenu(false)}
              className="flex mb-4 justify-end w-full px-2 py-1"
            >
              <img
                className="w-7 bg-white p-2 rounded-lg"
                src="/assets/close.png"
                alt="close"
              />
            </div>
            <div className="flex flex-col gap-y-3 items-center">
              {navLinks.map((item, i) => (
                <div
                  className=" cursor-pointer flex items-center gap-x-1"
                  key={item.name}
                >
                  <img
                    className={`${i === 0 ? "w-10 h-10" : "w-5 h-5"}`}
                    src={item.icon}
                    alt={item.name}
                  />
                  <p className="text-white font-medium">{item.name}</p>
                  {i === 0 && (
                    <img className="w-3" src="assets/arrow.svg" alt="arrow" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
