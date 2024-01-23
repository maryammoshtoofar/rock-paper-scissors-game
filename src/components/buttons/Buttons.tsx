import Button from "./game-button/GameButton";
import buttons from "../../lib/buttons";
import ButtonsContainer from "./buttons-container/ButtonsContainer";
import { useContext, useEffect, useState } from "react";
import {
  generateComputerChoice,
  generateGameResult,
  generateScore,
} from "../../utils/utils";
import { GameContext } from "../../context/GameContext";
import { GameChoices, GameResult } from "../../types/types";

const Buttons = () => {
  const [UIButtons, setUIButtons] = useState(buttons);

  const { gameInfo, setGameInfo } = useContext(GameContext);
  const handleGameResult = (
    userChoice: GameChoices,
    result: GameResult,
    score: number
  ) => {
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
  // useEffect(() => {
  //   console.log(userChoice);
  // }, [userChoice]);

  useEffect(() => {
    if (gameInfo.userChoice && !gameInfo.result) {
      const { userChoice, computerChoice, result, score } = gameInfo;
      handleGameResult(userChoice, result, score);
    }
    console.log(gameInfo);
  }, [gameInfo]);

  return (
    <ButtonsContainer>
      {buttons.map((button) => (
        <Button
          key={button.id}
          {...button}
        />
      ))}
    </ButtonsContainer>
  );
};

export default Buttons;
