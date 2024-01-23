import Button from "./button/Button";
import buttons from "../../lib/buttons";
import ButtonsContainer from "./buttons-container/ButtonsContainer";
import { useContext, useEffect, useState } from "react";
import {
  generateGameResult,
  generateScore,
} from "../../utils/utils";
import { GameContext } from "../../context/GameContext";
import { GameChoices, GameResult } from "../../types/types";

const Buttons = () => {
  const { gameInfo, setGameInfo } = useContext(GameContext);
  const handleGameResult = (
    userChoice: GameChoices,
    ComputerChoice: GameChoices,
    result: GameResult,
    score: number
  ) => {
    const finalResult = generateGameResult(userChoice, ComputerChoice);
    const finalScore = generateScore(finalResult, score);
    setGameInfo({
      ...gameInfo,
      result: finalResult,
      score: finalScore,
    });
  };

  useEffect(() => {
    if (gameInfo.computerChoice && gameInfo.userChoice && !gameInfo.result) {
      console.log("ready to calc results");
      const { userChoice, computerChoice, result, score } = gameInfo;
      handleGameResult(userChoice, computerChoice, result, score);
    }
  }, [gameInfo]);

  useEffect(() => {
    console.log(gameInfo);
  }, [gameInfo]);

  return (
    <ButtonsContainer>
      {buttons.map((button) => (
        <Button key={button.id} {...button} />
      ))}
    </ButtonsContainer>
  );
};

export default Buttons;
