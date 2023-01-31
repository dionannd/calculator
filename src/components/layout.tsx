import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import Navigation from "./navigation";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#eff4fe]">
      <Header title={title} />

      <main className="flex w-[375px] h-[812px] items-center flex-col justify-between text-[#E3E7E9] m-0 p-0 text-center bg-[#161A20] border-[8px] border-white rounded-[34px] shadow-xl">
        <Navbar />
        <Navigation />

        <div className="h-full justify-end flex flex-col mb-4 w-full">
          {children}
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Layout;
