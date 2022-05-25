import Link from "next/link";
import { FC } from "react";
import { ExtendCSS, FontVariants } from "../types";

type Props = ExtendCSS & {
  children: string | string[];
  onClick: string | Function;
};

const Button: FC<Props> = ({ children, onClick, className }) => {
  const hasURL = typeof onClick === "string";
  const classes = {
    wrapper: `font-${FontVariants.BUTTON} ml-button ` + className,
    inner: `ml-button__inner`,
  };
  return (
    <>
      {hasURL && (
        <Link href={onClick}>
          <div className={classes.wrapper}>
            <span className={classes.inner}>{children}</span>
          </div>
        </Link>
      )}
      {!hasURL && (
        <div onClick={() => onClick()} className={classes.wrapper}>
          <span className={classes.inner}>{children}</span>
        </div>
      )}
    </>
  );
};

export default Button;
