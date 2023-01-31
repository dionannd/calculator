import ButtonCorverter from "@/components/buttons/buttonCorverter";
import Layout from "@/components/layout";
import type { NextPage } from "next";

const Converter: NextPage = () => {
  return (
    <Layout title="Calculator- Apps">
      <h1 className="text-xl font-bold">Converter</h1>
      <div className="mb-4 flex justify-between px-7">
        <input
          className="text-[40px] max-w-[250px] bg-[#161A20] border-b border-dotted"
          value="10"
        />
      </div>
      <div className="mb-4 flex justify-between px-7">
        <input
          className="text-[40px] max-w-[250px] bg-[#161A20] border-b border-dotted"
          value="3.089"
        />
      </div>
      <ButtonCorverter />
    </Layout>
  );
};

export default Converter;
