import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Doge from "../images/doge2.png";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-amber-400 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-amber-400">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        {/* logo pic */}
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image src={Doge} layout="fill" objectFit="cover" />
        </div>

        <div className=" text-left lg:text-center col-span-4">
          <div className="relative h-48 w-48 lg:mx-auto border-amber-400 border-8 rounded-full">
            {/*image avatar */}
            <Avatar logoutOnPress />
          </div>
          {/* message */}
          <h1 className="text-3xl">Welcome to the metaverse</h1>
          {/* username */}
          <h2 className="text-5xl truncate">{user.getUsername()}</h2>
          {/* change username component */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
