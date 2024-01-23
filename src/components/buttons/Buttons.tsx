import Button from "./game-button/GameButton";
import buttons from "../../lib/buttons";
import ButtonsContainer from "./buttons-container/ButtonsContainer";
import { useContext, useState } from "react";
import {
  generateComputerChoice,
  generateGameResult,
  generateScore,
} from "../../utils/utils";
import { GameContext } from "../../context/GameContext";
import { GameChoices } from "../../types/types";

const Buttons = () => {
  const { gameInfo, setGameInfo } = useContext(GameContext);
  const [unselectedButtons, setUnselectedButtons] = useState("");
  const [selectedButton, setSelectedButton] = useState("");
  const HandleUIChange = () => {
    // console.log(gameInfo);
    // if (gameInfo.status === "active") {
    //   console.log(gameInfo.userChoice);
    // }
    // setSelectedButton("m-auto bg-red-600");
    // setUnselectedButtons("hidden");
  };

  const startGame = (type: GameChoices) => {
    setGameInfo({
      ...gameInfo,
      status: "active",
      userChoice: type,
      selectedButtonStyle:
        "-translate-x-16 sm:-translate-x-52 sm:translate-y-3/4 sm:scale-[1.5] lg:-translate-x-80 lg:translate-y-full lg:scale-[2.5] ",
    });
  };

  const handleGameResult = (userChoice: GameChoices, score: number) => {
    const computerChoice = generateComputerChoice();
    const finalResult = generateGameResult(userChoice, computerChoice);
    const finalScore = generateScore(finalResult, score);
    HandleUIChange();
    setGameInfo({
      ...gameInfo,
      // status: "over",
      result: finalResult,
      userChoice: userChoice,
      computerChoice: computerChoice,
      score: finalScore,
    });
    console.log(gameInfo);
  };
  return (
    <ButtonsContainer>
      {buttons.map((button) => (
        <Button key={button.id} {...button} startGame={startGame} />
      ))}
    </ButtonsContainer>
  );
};

export default Buttons;
