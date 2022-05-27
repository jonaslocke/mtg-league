import { FC } from "react";
import { ExtendCSS } from "../types";

type Props = ExtendCSS & {};

const Default: FC<Props> = ({ className }) => {
  return <div>Default</div>;
};

export default Default;
