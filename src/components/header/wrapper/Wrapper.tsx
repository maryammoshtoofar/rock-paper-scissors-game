import { ReactNode } from "react";

type Props = { children: ReactNode };

const Wrapper = ({ children }: Props) => {
  return (
    <header className="flex justify-between items-center uppercase text-white border-2 border-gray rounded-lg w-4/5 sm:w-3/4 md:w-1/2  p-3 sm:text-lg">
      {children}
    </header>
  );
};

export default Wrapper;
