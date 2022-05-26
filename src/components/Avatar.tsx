import { FC } from "react";
import { ElementSizes } from "../types";

type Props = {
  size: ElementSizes;
  children: JSX.Element;
};

const Avatar: FC<Props> = ({ size, children }) => {
  return (
    <div className={`avatar ${size && `avatar--${size}`}`}>{children}</div>
  );
};

export default Avatar;
