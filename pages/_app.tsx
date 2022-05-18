import "../styles/globals.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import SideBar from "../src/components/SideBar";
import { useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SideBar open={open} setOpen={setOpen} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
