import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import SideBar from "../src/components/SideBar";
import SignIn from "../src/components/SingIn";
import "../styles/globals.css";
import "../styles/index.scss";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const [open, setOpen] = useState(false);

  return (
    <SessionProvider session={session}>
      <SignIn />
      <SideBar open={open} setOpen={setOpen} />
      <main className={`main ${open && "extended"}`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default MyApp;
