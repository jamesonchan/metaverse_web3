import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import ChatMessage from "../components/ChatMessage";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen bg-gradient-to-b from-black to-rose-500 overflow-y-scroll">
      <Head>
        <title>Metaverse Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <Header />
          {/* chat box */}
          <ChatMessage />
        </div>
    </div>
  );
}
