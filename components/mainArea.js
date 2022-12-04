/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function MainArea() {
  return (
    <div className="mt-20 text-white flex font-main flex-col items-center px-5">
      <div className="flex  gap-y-1 flex-col px-5 md:px-10 justify-start items-center py-2 gradien3 w-full md:w-[30rem] rounded-lg">
        <img className="w-36" src="/assets/Holderr.png" alt="logo" />
        <p className="text-white text-center">
          Join #TOKEN NAME# holders group chat.Make sure to connect your wallet,
          enter your telegram user ID and click the Join button.
        </p>
      </div>
      <div className="mt-2 rounded-lg flex flex-col items-center justify-start gap-y-2 w-full md:w-64 gradien3  py-5">
        <input
          className="rounded-3xl px-4 w-64 md:w-48 placeholder:text-[14px] inputGradient outline-gray-600 text-white font-main py-1"
          placeholder="Enter telegram user ID"
        />
        <button className="flex justify-end items-start w-full px-10  ">
          <p className="btnGradient px-3 font-semibold rounded-2xl">Join</p>
        </button>
      </div>
      <div className="w-full md:w-[34rem] px-2 adGradient h-24 rounded-lg mt-3 flex justify-end items-end">
        <p className="adTextGradient">Advertisement</p>
      </div>
    </div>
  );
}
