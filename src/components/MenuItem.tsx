import { FC } from "react";
import { Link } from "../types";

type Props = Link & { open: boolean };

const MenuItem: FC<Props> = ({ open, title, initial, to }) => {
  return (
    <a href={to.toString()} className={`menu-icon ${open && "open"}`}>
      <div className="menu-icon__inner">{open ? title : initial}</div>
    </a>
  );
};

export default MenuItem;
