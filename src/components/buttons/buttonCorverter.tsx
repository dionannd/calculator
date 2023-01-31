import React from "react";
import { RefreshIcon } from "../icons";

const ButtonCorverter = () => {
  return (
    <>
      <div className="grid grid-cols-2 mb-1.5 gap-1.5 w-full items-center text-[28px] font-light px-4 text-[#CBE1FF]">
        <button className="bg-[#363E4D] active:scale-90 transition-all duration-200 cols w-full h-[64px] rounded-[2px] items-center flex justify-center">
          <span>AC</span>
        </button>
        <button className="bg-[#363E4D] active:scale-90 transition-all duration-200 w-full h-[64px] rounded-[2px] items-center flex justify-center">
          <RefreshIcon />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1.5 w-full items-center text-[28px] font-light px-4 text-[#CBE1FF]">
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>7</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>8</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>9</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>4</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>5</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>6</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>1</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>2</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>3</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>.</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>0</span>
        </button>
        <button className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90">
          <span>DEL</span>
        </button>
      </div>
    </>
  );
};

export default ButtonCorverter;
