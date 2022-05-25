import Link from "next/link";
import { FC } from "react";
import { FontVariants, Link as Lnk } from "../types";
import Typography from "./Typography";

type Props = Lnk & { open: boolean };

const MenuItem: FC<Props> = ({ open, title, initial, to, as }) => {
  const text = open ? title : initial;
  return (
    <Link href={to} as={as}>
      <div className={`menu-icon ${open && "open"}`}>
        <div className="menu-icon__inner">
          <Typography variant={FontVariants.HEADING_4}>{text}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
