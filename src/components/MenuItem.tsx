import Link from "next/link";
import { FC } from "react";
import { Link as Lnk } from "../types";

type Props = Lnk & { open: boolean };

const MenuItem: FC<Props> = ({ open, title, initial, to, as }) => {
  return (
    <Link href={to} as={as}>
      <div className={`menu-icon ${open && "open"}`}>
        <div className="menu-icon__inner">{open ? title : initial}</div>
      </div>
    </Link>
  );
};

export default MenuItem;
