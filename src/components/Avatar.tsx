import { FC } from "react";
import { AvatarSizes } from "../types";

type Props = {
  size: AvatarSizes;
  children: JSX.Element;
};

const Avatar: FC<Props> = ({ size, children }) => {
  return (
    <div className={`avatar ${size && `avatar--${size}`}`}>{children}</div>
  );
};

export default Avatar;
