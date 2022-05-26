import { FC } from "react";
import { ExtendCSS, FontVariants } from "../types";

type Props = ExtendCSS & {
  variant: FontVariants;
  children: string | string[] | null | undefined;
};

const Typography: FC<Props> = ({ variant, children, className }) => {
  let classes = `font-${variant}`;
  if (className) {
    classes += " " + className;
  }
  return <span className={`${classes}`}>{children}</span>;
};

export default Typography;
