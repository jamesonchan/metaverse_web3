import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>welcome</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
