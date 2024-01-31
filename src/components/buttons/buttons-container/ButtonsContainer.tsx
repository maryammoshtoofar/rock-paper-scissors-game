import pentagon from "../../../assets/images/bg-pentagon.svg";
import { ReactNode, useContext } from "react";
import useGame from "../../../hooks/useGame";

type Props = { children: ReactNode };
const ButtonsContainer = ({ children }: Props) => {
  const { status } = useGame();
  return (
    <main className="relative flex flex-col items-center max-w-full">
      <span
        className={`${
          status !== "idle"
            ? "opacity-1 -translate-x-16 translate-y-28 sm:-translate-x-52 sm:translate-y-3/4 sm:scale-[1.5] lg:-translate-x-80 lg:-translate-y-full lg:scale-[2.5] "
            : "opacity-0"
        } text-white uppercase absolute transition ease-in-out delay-900`}
      >
        you picked
      </span>
      <span
        className={`${
          status !== "idle"
            ? "opacity-1 translate-x-16 translate-y-28 sm:translate-x-52 sm:translate-y-3/4 sm:scale-[1.5] lg:translate-x-80 lg:-translate-y-full lg:scale-[2.5] "
            : "opacity-0"
        } text-white uppercase absolute transition ease-in-out delay-900`}
      >
        the house picked
      </span>
      <img
        src={pentagon}
        alt="pentagon"
        className={`${
          status === "idle" ? "opacity-1" : "opacity-0"
        } w-3/4 sm:w-full max-w-full`}
      />
      {children}
    </main>
  );
};

export default ButtonsContainer;
