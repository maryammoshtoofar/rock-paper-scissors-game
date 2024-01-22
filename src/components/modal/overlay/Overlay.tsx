import { ReactNode } from "react";

type Props = { children: ReactNode; onClick: (e: any) => void };

const Overlay = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="overlay fixed z-50 top-0 w-full h-full flex justify-center items-center"
    >
      {children}
    </div>
  );
};

export default Overlay;
