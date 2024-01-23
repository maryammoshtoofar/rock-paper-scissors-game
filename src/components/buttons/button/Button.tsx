import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import usePosition from "../../../hooks/usePosition";
import { GameChoices } from "../../../types/types";
import {
  generateComputerChoice,
  generateGameResult,
} from "../../../utils/utils";

type Props = {
  id: number;
  type: GameChoices;
  img: string;
  order: 1 | 2 | 3 | 4 | 5;
};

const Button = ({ type, order, img }: Props) => {
  const { gameInfo, setGameInfo } = useContext(GameContext);
  const position = usePosition(order);
  const handleChoices = (type: GameChoices) => {
    setGameInfo({
      ...gameInfo,
      result: null,
      userChoice: type,
      computerChoice: generateComputerChoice(),
    });
  };

  return (
    <button
      onClick={() => handleChoices(type)}
      className={`gradient-border absolute rounded-full flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 ${type} ${position}`}
    >
      <div className="box-shadow  bg-white rounded-full flex flex-col items-center justify-center p-4 w-full h-full">
        <img src={img} className="w-10" />
      </div>
    </button>
  );
};

export default Button;
