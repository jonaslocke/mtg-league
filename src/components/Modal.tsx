import { FC } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Modal: FC<Props> = ({ children }) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
