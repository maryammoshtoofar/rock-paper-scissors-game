import { ReactNode } from "react";

type Props = { children: ReactNode };

const ModalTitle = ({ children }: Props) => {
  return <h3 className="text-2xl text-dark uppercase font-bold">{children}</h3>;
};

export default ModalTitle;
