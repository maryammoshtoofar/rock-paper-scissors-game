import pentagon from "../../../assets/images/bg-pentagon.svg";
import { ReactNode } from "react";

type Props = { children: ReactNode };
const ButtonsContainer = ({ children }: Props) => {
  return (
    <main className="relative flex flex-col items-center max-w-full">
      <img src={pentagon} className="w-3/4 sm:w-full max-w-full" />
      {children}
    </main>
  );
};

export default ButtonsContainer;
