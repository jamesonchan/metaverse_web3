import React, { useState,useRef } from "react";
import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)

  const setUsername = () => {
    const username = inputRef.current.value
    if (!username) return;
    setUserData({
      username,
    });
    setIsOpen(false)
    inputRef.current.value = ''
  };
  return (
    <div className="text-sm absolute top-5 right-14">
      <button onClick={()=>setIsOpen(!isOpen)} className="hover:text-amber-700">
        Change username
      </button>
      <div className={`${isOpen ? 'absolute' : 'hidden'} bg-gray-700 bg-opacity-50 p-2 text-white border-4 rounded-lg border-blue-300  transition-all duration-200 top-7 -right-[40px]`}>
        <h1 className="text-sm font-bold">Enter your new username</h1>
        <br />
        <div className="flex bg-amber-600 rounded-full">
          <input type="text" className="bg-transparent outline-none p-1 ml-1 w-[90px] sm:w-[115px]" ref={inputRef} />
          <button onClick={setUsername} className="font-bold text-sm pr-2">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ChangeUsername;
