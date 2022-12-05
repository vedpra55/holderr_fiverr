/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HolderrDevMainArea() {
  return (
    <div className="mt-20 text-white flex font-main flex-col items-center px-5">
      <div className="flex  gap-y-1 flex-col px-5 md:px-10 justify-start items-center py-2 gradien3 w-full md:w-[30rem] rounded-lg">
        <img className="w-36" src="/assets/Holderr.png" alt="logo" />
        <p className="text-white text-center">
          Manage #TOKEN NAME# holders group chat.Enter the amount of holdings
          necessary to enter the group chat and click the save button.
        </p>
      </div>
      <div className="mt-2 rounded-lg flex flex-col items-center justify-start gap-y-2 w-full md:w-96 gradien3  py-5">
        <div className="relative">
          <input
            className="rounded-3xl px-4 w-64 md:w-80 placeholder:text-[14px] inputGradient outline-gray-600 text-white font-main py-1"
            placeholder="Minimum of tokens required"
          />
          <div className="absolute inset-0  flex items-center left-56  md:left-[17rem]">
            <img className="w-5  " src="/assets/Plus.svg" alt="plus" />
          </div>
        </div>
        <button className="flex justify-end items-start w-full px-10  ">
          <p className="btnGradient px-3 font-semibold rounded-2xl">Save</p>
        </button>
      </div>
      <div className="w-full md:w-[34rem] px-2 adGradient h-24 rounded-lg mt-3 flex justify-end items-end">
        <p className="adTextGradient">Advertisement</p>
      </div>
      <div className="w-full md:w-[20rem] px-2 adGradient rounded-lg mt-3 flex flex-col  items-center py-5">
        <img
          className="w-full h-28 object-contain"
          alt="random"
          src="https://plus.unsplash.com/premium_photo-1661573111481-da21c4137d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
        <p className="mt-5">Days: x left</p>
        <button className="bg-green-400 px-5 mt-2 py-1 rounded-xl">Pay</button>
      </div>
    </div>
  );
}
