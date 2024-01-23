import pentagon from "../../../assets/images/bg-pentagon.svg";
import { ReactNode, useContext } from "react";
import { GameContext } from "../../../context/GameContext";

type Props = { children: ReactNode };
const ButtonsContainer = ({ children }: Props) => {
  const { gameInfo } = useContext(GameContext);
  return (
    <main className="relative flex flex-col items-center max-w-full">
      <span
        className={`${
          gameInfo.status === "active"
            ? "opacity-1 -translate-x-16 translate-y-28 sm:-translate-x-52 sm:translate-y-3/4 sm:scale-[1.5] lg:-translate-x-80 lg:-translate-y-full lg:scale-[2.5] "
            : "opacity-0"
        } text-white uppercase absolute transition ease-in-out delay-1000`}
      >
        you picked
      </span>
      <span className="uppercase absolute opacity-0">the house picked</span>
      <img
        src={pentagon}
        className={`${
          gameInfo.status !== "active" ? "opacity-1" : "opacity-0"
        } w-3/4 sm:w-full max-w-full`}
      />
      {children}
    </main>
  );
};

export default ButtonsContainer;
