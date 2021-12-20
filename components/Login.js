import React from "react";
import Image from "next/image";
import Background from "../images/Gaming and the metaverse.jpg";
import Doge from "../images/doge2.png";
import ClipLoader from "react-spinners/ClipLoader";
import { useMoralis } from "react-moralis";

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
          className="bg-yellow-300 border-4 relative border-[#191932] rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
        <div className="absolute top-1/2 translate-y-[140px] left-1/2 -translate-x-2">
          <ClipLoader size={20} color="#191932"  loading={isAuthenticating} />
        </div>
      </div>
      <div className="w-full h-screen">
        <Image src={Background} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
