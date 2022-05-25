import { FC } from "react";
import { ExtendCSS, FontVariants } from "../types";

type Props = ExtendCSS & {
  variant: FontVariants;
  children: string | null | undefined;
};

const Typography: FC<Props> = ({ variant, children, className }) => {
  const classes = `font-${variant} ` + className;
  return <span className={`${classes}`}>{children}</span>;
};

export default Typography;
