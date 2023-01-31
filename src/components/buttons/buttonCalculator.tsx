import React from "react";
import { DividedIcon } from "../icons";

interface Props {
  handleOperand: (e: any) => void;
  handleOperator: (e: any) => void;
}

const ButtonCalculator = ({ handleOperand, handleOperator }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-1.5 w-full items-center text-[28px] font-light px-4 text-[#CBE1FF]">
      <button
        className="bg-[#363E4D] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] rounded-tl-[8px] items-center flex justify-center"
        value="ac"
        onClick={handleOperator}
      >
        AC
      </button>
      <button
        className="bg-[#363E4D] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperator}
        value="pm"
      >
        +/-
      </button>
      <button
        className="bg-[#363E4D] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperator}
        value="%"
      >
        %
      </button>
      <button
        className="bg-[#0060E5] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] rounded-tr-[8px] items-center flex justify-center"
        onClick={handleOperator}
        value="/"
      >
        /
      </button>

      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperand}
        value="7"
      >
        7
      </button>
      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperand}
        value="8"
      >
        8
      </button>
      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperand}
        value="9"
      >
        9
      </button>
      <button
        className="bg-[#0060E5] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperator}
        value="x"
      >
        x
      </button>
      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperand}
        value="4"
      >
        4
      </button>
      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperand}
        value="5"
      >
        5
      </button>
      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperand}
        value="6"
      >
        6
      </button>

      <button
        className="bg-[#0060E5] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperator}
        value="-"
      >
        -
      </button>
      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        onClick={handleOperand}
        value="1"
      >
        1
      </button>
      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        value="2"
        onClick={handleOperand}
      >
        2
      </button>
      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        value="3"
        onClick={handleOperand}
      >
        3
      </button>
      <button
        className="bg-[#0060E5] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        value="+"
        onClick={handleOperator}
      >
        +
      </button>

      <button
        className="col-span-2 bg-[#242933] active:scale-95 transition-all duration-200 h-[79px] w-full rounded-[2px] rounded-bl-[8px] items-center flex justify-center"
        value="0"
        onClick={handleOperand}
      >
        0
      </button>
      <button
        className="bg-[#242933] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] items-center flex justify-center"
        value="."
        onClick={handleOperator}
      >
        .
      </button>
      <button
        className="bg-[#0060E5] active:scale-95 transition-all duration-200 w-full h-[79px] rounded-[2px] rounded-br-[8px] items-center flex justify-center"
        value="="
        onClick={handleOperator}
      >
        =
      </button>
    </div>
  );
};

export default ButtonCalculator;
