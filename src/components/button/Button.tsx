import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import usePosition from "../../hooks/usePosition";
import { GameChoices } from "../../types/types";

type Props = {
  id: number;
  type: GameChoices;
  img: string;
  order: 1 | 2 | 3 | 4 | 5;
  handleGameResult: (type: GameChoices, score: number) => void;
};

const Button = ({ type, order, img, handleGameResult }: Props) => {
  const { gameInfo } = useContext(GameContext);
  const position = usePosition(order);
  return (
    <button
      onClick={() => handleGameResult(type, gameInfo.score)}
      className={`gradient-border absolute rounded-full flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 ${type} ${position}`}
    >
      <div className="box-shadow  bg-white rounded-full flex flex-col items-center justify-center p-4 w-full h-full">
        <img src={img} className="w-10" alt={type} />
      </div>
    </button>
  );
};

export default Button;
