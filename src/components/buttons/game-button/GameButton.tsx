import useGame from "../../../hooks/useGame";
import usePosition from "../../../hooks/usePosition";
import { GameChoices } from "../../../types/types";

type Props = {
  id: number;
  type: GameChoices;
  img: string;
  order: 1 | 2 | 3 | 4 | 5;
  secondButton?: true;
};
const GameButton = ({ type, order, img, secondButton }: Props) => {
  const {
    userChoice,
    userButtonStyle,
    status,
    startGame,
    computerButtonStyle,
    computerChoice,
  } = useGame();
  const position = usePosition(order);

  const conditionalStyle = secondButton
    ? `${computerButtonStyle} `
    : userChoice === type
    ? userButtonStyle
    : computerChoice === type
    ? computerButtonStyle
    : status === "active" || status === "over"
    ? "opacity-0 translate-x-full translate-y-1/2"
    : position;

  return (
    <button
      onClick={() => startGame(type)}
      className={`gradient-border absolute rounded-full flex flex-col items-center w-24 h-24 max-[308px]:w-20 max-[308px]:h-20 sm:w-32 sm:h-32 ${type} ${conditionalStyle}`}
    >
      <div className="box-shadow bg-white rounded-full flex flex-col items-center justify-center w-full h-full">
        <img src={img} className="w-10 max-[308px]:w-8" alt={type} />
      </div>
    </button>
  );
};

export default GameButton;
