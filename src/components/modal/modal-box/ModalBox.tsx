import {  ReactNode } from "react";

type Props = { children: ReactNode;  };
const ModalBox = ({ children }: Props) => {
  return (
    <div
      className=" bg-white rounded-md p-6 absolute z-50 h-full sm:h-auto w-full sm:w-auto flex flex-col items-center justify-evenly"
    >
      {children}
    </div>
  );
};

export default ModalBox;
