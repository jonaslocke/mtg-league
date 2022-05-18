import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import SideBar from "../src/components/SideBar";
import "../styles/globals.css";
import "../styles/index.scss";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const [open, setOpen] = useState(false);
  return (
    <SessionProvider session={session}>
      <SideBar open={open} setOpen={setOpen} />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
