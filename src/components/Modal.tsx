import { useRouter } from "next/router";
import { FC, MouseEvent, useEffect } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  open: boolean;
};

const Modal: FC<Props> = ({ children, open }) => {
  const router = useRouter();
  return (
    <div className={`modal ${open && "open"}`} onClick={() => router.back()}>
      <span onClick={(event) => event.stopPropagation()}>{children}</span>
    </div>
  );
};

export default Modal;
