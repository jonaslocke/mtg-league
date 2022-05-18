import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "../types";
import MenuIcon from "./MenuItem";
import Image from "next/image";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SideBar: FC<Props> = ({ open, setOpen }) => {
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const links: Link[] = [];
  links.push({ title: "Pioneer", to: "#", initial: "P" });
  links.push({ title: "Modern", to: "#", initial: "M" });
  links.push({ title: "Standard", to: "#", initial: "S" });
  return (
    <div className={`vertical-bar ${open && "open"}`}>
      <Image
        src="/ml.svg"
        width={32}
        height={32}
        onClick={handleOpen}
        className="logo"
      />
      <div className="vertical-bar__links">
        {links.map(({ title, to, initial }, id) => (
          <MenuIcon
            title={title}
            to={to}
            initial={initial}
            open={open}
            key={id}
          />
        ))}
        <div className="spacer"></div>
        <MenuIcon title={"Login"} to={"#"} initial={"L"} open={open} />
      </div>
    </div>
  );
};

export default SideBar;
