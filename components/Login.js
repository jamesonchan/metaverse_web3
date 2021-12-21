import React from "react";
import Image from "next/image";
import Background from "../images/Gaming and the metaverse.jpg";
import Doge from "../images/doge2.png";
import ClipLoader from "react-spinners/ClipLoader";
import { useMoralis } from "react-moralis";
import { LoginIcon } from "@heroicons/react/outline";

function Login() {
  const { authenticate, isAuthenticating } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-10 h-4/6 items-center w-full justify-center space-y-3 ">
        {/* logo */}
        <Image src={Doge} width={200} height={200} objectFit="cover" />
        {/* login button */}
        <button
          onClick={() => authenticate()}
          className="bg-yellow-300 border-4 relative border-[#191932] rounded-lg p-3 font-bold animate-pulse"
        >
          <div className="flex items-center">
            <LoginIcon className="h-7 pr-2" />
            <p className="text-lg">Connect with your wallet</p>
          </div>
        </button>
        <div className="absolute top-1/2 translate-y-[140px] left-1/2 -translate-x-2">
          <ClipLoader size={20} color="#191932" loading={isAuthenticating} />
        </div>
      </div>
      <div className="w-full h-screen">
        <Image src={Background} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
