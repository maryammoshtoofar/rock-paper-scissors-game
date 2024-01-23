import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import usePosition from "../../../hooks/usePosition";
import { GameChoices } from "../../../types/types";
import {
  generateComputerChoice,
  generateGameResult,
  generateScore,
} from "../../../utils/utils";
import Button from "../../button/Button";
type Props = {
  id: number;
  type: GameChoices;
  img: string;
  order: 1 | 2 | 3 | 4 | 5;
};
const GameButton = (props: Props) => {
  const { gameInfo, setGameInfo } = useContext(GameContext);
  const handleGameResult = (userChoice: GameChoices, score: number) => {
    const computerChoice = generateComputerChoice();
    const finalResult = generateGameResult(userChoice, computerChoice);
    const finalScore = generateScore(finalResult, score);
    setGameInfo({
      ...gameInfo,
      result: finalResult,
      userChoice: userChoice,
      computerChoice: computerChoice,
      score: finalScore,
    });
  };

  return <Button {...props} handleGameResult={handleGameResult} />;
};

export default GameButton;
