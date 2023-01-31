import React from "react";
import { RefreshIcon } from "../icons";

interface Props {
  handleOperand: (e: any) => void;
  handleOperator: (e: any) => void;
}

const ButtonCorverter = ({ handleOperand, handleOperator }: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 mb-1.5 gap-1.5 w-full items-center text-[28px] font-light px-4 text-[#CBE1FF]">
        <button
          className="bg-[#363E4D] active:scale-90 transition-all duration-200 cols w-full h-[64px] rounded-[2px] items-center flex justify-center"
          onClick={handleOperator}
          value="ac"
        >
          AC
        </button>
        <button className="bg-[#363E4D] active:scale-90 transition-all duration-200 w-full h-[64px] rounded-[2px] items-center flex justify-center">
          <RefreshIcon />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1.5 w-full items-center text-[28px] font-light px-4 text-[#CBE1FF]">
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="7"
        >
          7
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="8"
        >
          8
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="9"
        >
          9
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="4"
        >
          4
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="5"
        >
          5
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="6"
        >
          6
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="1"
        >
          1
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="2"
        >
          2
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="3"
        >
          3
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperator}
          value="."
        >
          .
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperand}
          value="0"
        >
          0
        </button>
        <button
          className="bg-[#242933] w-full h-[79px] rounded-[2px] items-center flex justify-center transition-all duration-200 active:scale-90"
          onClick={handleOperator}
        >
          DEL
        </button>
      </div>
    </>
  );
};

export default ButtonCorverter;
