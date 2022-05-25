import { FC } from "react";
import { FontVariants } from "../types";

type Props = {
  variant: FontVariants;
  children: string;
};

const Typography: FC<Props> = ({ variant, children }) => {
  const classes = `font-${variant}`;
  return <span className={`${classes}`}>{children}</span>;
};

export default Typography;
