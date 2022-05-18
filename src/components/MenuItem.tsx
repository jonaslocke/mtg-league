import { FC } from "react";
import { Link } from "../types";

type Props = Link & { open: boolean; callback?: () => void };

const MenuItem: FC<Props> = ({ open, title, initial, to, callback }) => {
  const linkEl: JSX.Element = (
    <a href={to.toString()} className={`menu-icon ${open && "open"}`}>
      <div className="menu-icon__inner">{open ? title : initial}</div>
    </a>
  );
  const callbackEl: JSX.Element = (
    <button className={`menu-icon ${open && "open"}`} onClick={callback}>
      <div className="menu-icon__inner">{open ? title : initial}</div>
    </button>
  );
  return callback ? callbackEl : linkEl;
};

export default MenuItem;
