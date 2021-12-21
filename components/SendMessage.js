import React from "react";

function SendMessage() {
  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-blue-400 border-4">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        placeholder={`Enter a message...`}
        type="text"
      />
      <button className="font-bold text-amber-400">Send</button>
    </form>
  );
}

export default SendMessage;
