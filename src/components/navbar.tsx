import { formatTime } from "@/lib/helpers";
import React from "react";
import { BatteryIcon, MobileSignalIcon, WifiIcon } from "@/components/icons";

const Navbar = () => {
  const now = new Date();

  return (
    <div className="flex h-[44px] text-white mt-1 items-center justify-between w-full px-2.5">
      <div className="ml-6">{formatTime(now)}</div>
      <div className="flex space-x-1">
        <MobileSignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
};

export default Navbar;
