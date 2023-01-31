import ButtonCorverter from "@/components/buttons/buttonCorverter";
import { ChevronDownIcon } from "@/components/icons";
import Layout from "@/components/layout";
import type { NextPage } from "next";
import { useState } from "react";

const Converter: NextPage = () => {
  const [operand, setOperand] = useState("0");
  const [answer, setAnswer] = useState(0);

  const handleOperand = (e: any) => {
    const value = e.target.value;
    setOperand(value);
  };

  const handleOperator = (e: any) => {
    const value = e.target.value;

    // if all clear
    if (value === "ac") {
      setOperand("");
      setAnswer(0);
      return;
    }
  };

  return (
    <Layout title="Converter - Apps">
      <div className="flex space-x-2 mb-8 items-center justify-center cursor-pointer">
        <p className="text-xl">Length</p>
        <ChevronDownIcon />
      </div>
      <div className="mb-4 flex justify-between px-7 items-center">
        <input
          className="text-[40px] max-w-[250px] bg-[#161A20] border-b border-dotted"
          onChange={handleOperand}
          value={operand ? operand : "0"}
          disabled
        />
        <div className="flex space-x-1 items-center justify-center cursor-pointer">
          <p className="">ft</p>
          <ChevronDownIcon />
        </div>
      </div>
      <div className="mb-4 flex justify-between px-7">
        <input
          className="text-[40px] max-w-[250px] bg-[#161A20] border-b border-dotted"
          value={answer}
          disabled
        />
        <div className="flex space-x-1 items-center justify-center cursor-pointer">
          <p className="">m</p>
          <ChevronDownIcon />
        </div>
      </div>

      <ButtonCorverter
        handleOperand={handleOperand}
        handleOperator={handleOperator}
      />
    </Layout>
  );
};

export default Converter;
