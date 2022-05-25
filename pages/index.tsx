import type { NextPage } from "next";
import Typography from "../src/components/Typography";
import { FontVariants } from "../src/types";

const Home: NextPage = () => {
  return <Typography variant={FontVariants.HEADING_1}>Home</Typography>;
};

export default Home;
