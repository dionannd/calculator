import ButtonCalculator from "@/components/buttons/buttonCalculator";
import { ClockIcon, UndoIcon } from "@/components/icons";
import Layout from "@/components/layout";
import type { NextPage } from "next";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [answer, setAnswer] = useState(0);
  const [prevAnswer, setPrevAnswer] = useState(0);
  const [operand, setOperand] = useState("");

  const handleOperand = (e: any) => {
    const value = e.target.value;

    setOperand((op) => op + value);
  };

  const handleOperator = (e: any) => {
    const value = e.target.value;

    // if all clear
    if (value === "ac") {
      setOperand("");
      if (answer > 0) setPrevAnswer(answer);
      setAnswer(0);
      return;
    }

    // handle plus minus sign
    if (value === "pm") {
      if (operand === "") return;

      let calculated;
      // get the last char
      if (Number(operand.slice(-1))) {
        calculated = eval(operand);

        if (Math.sign(calculated) < 0) {
          calculated = Math.abs(calculated);
          setOperand(calculated.toString());
          return;
        } else {
          setOperand("-" + calculated.toString());
          return;
        }
      } else {
      }
    }

    let newOperand;
    // get last operand value
    if (operand.slice(-1) === value) {
      return;
    } else {
      if (!Number(operand.slice(-1))) {
        // remove the last char from operand
        newOperand = operand.slice(0, -1);

        // checks if the last operand char is zero
        if (Number(operand.slice(-1)) === 0) {
          setOperand(newOperand + `0` + value);
          return;
        } else {
          setOperand(newOperand + value);
          return;
        }
      } else {
        setOperand(operand + value);
      }
    }

    switch (value) {
      case "=":
        setAnswer(eval(operand));
        setOperand("");

        if (answer > 0) setPrevAnswer(answer);
        break;
      case "+":
        setOperand(eval(operand) + value);
        break;
      case "-":
        setOperand(`${eval(operand)}${value}`);
        break;
      case "/":
        setOperand(`${eval(operand)}${value}`);
        break;
      default:
        return;
    }
  };

  const handleDelete = () => {
    if (operand.length > 0) {
      setOperand((op) => op.slice(0, -1));
    }
  };

  return (
    <Layout title="Calculator - Apps">
      <div className="flex justify-end items-center px-4">
        <div className="flex bg-[#363E4C] items-center rounded-full py-[5px] space-x-2 px-4">
          <ClockIcon />
          <span className="font-light text-base">{prevAnswer}</span>
        </div>
      </div>

      <h1 className="text-[64px] mt-2 text-right px-4">{answer}</h1>

      <div className="flex items-center justify-between h-12 bg-[#20252E] text-[#CBE1FF] my-4 px-4">
        <button
          className="active:scale-90 transition-all duration-200"
          onClick={handleDelete}
        >
          <UndoIcon />
        </button>
        <h4 className="text-2xl leading-none font-light">
          {operand ? operand : "0"}
        </h4>
      </div>

      <ButtonCalculator
        handleOperand={handleOperand}
        handleOperator={handleOperator}
      />
    </Layout>
  );
};

export default Home;
