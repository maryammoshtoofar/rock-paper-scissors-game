import { ReactNode } from "react";

type Props = { children: ReactNode };

const ModalTitleContainer = ({ children }: Props) => {
  return (
    <div className="flex justify-center sm:justify-between items-center w-full sm:pb-6">
      {children}
    </div>
  );
};

export default ModalTitleContainer;
