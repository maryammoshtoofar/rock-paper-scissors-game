import { createContext, ReactNode, useState } from "react";
import buttons, { ButtonProps } from "../lib/buttons";
import { GameChoices, GameResult, GameStatus } from "../types/types";
import { generateComputerChoice, generateGameResult } from "../utils/utils";

export interface GameContextProps {
  status: GameStatus;
  userChoice: GameChoices | null;
  computerChoice: GameChoices | null;
  result: GameResult;
  score: number;
  userButtonStyle: string;
  computerButtonStyle: string;
  secondButton: ButtonProps | undefined;
  startGame: (choice: GameChoices) => void;
  updateComputerChoice: () => void;
  updateGameResult: () => void;
  updateGameScore: () => void;
  resetBoard: () => void;
}

interface GameProviderProps {
  children: ReactNode;
}

export const GameContext = createContext<GameContextProps | null>(null);

export const GameProvider = ({ children }: GameProviderProps) => {
  const [status, setStatus] = useState<GameStatus>("idle");
  const [userChoice, setUserChoice] = useState<GameChoices | null>(null);
  const [computerChoice, setComputerChoice] = useState<GameChoices | null>(
    null
  );
  const [result, setResult] = useState<GameResult>(null);
  const [score, setScore] = useState<number>(0);
  const [userButtonStyle, setUserButtonStyle] = useState<string>("");
  const [computerButtonStyle, setComputerButtonStyle] = useState<string>("");
  const [secondButton, setSecondButton] = useState<ButtonProps | undefined>(
    undefined
  );

  const startGame = (choice: GameChoices) => {
    setStatus("active");
    setUserChoice(choice);
    setUserButtonStyle(
      "-translate-x-16 sm:-translate-x-52 sm:translate-y-3/4 sm:scale-[1.5] lg:-translate-x-80 lg:translate-y-full lg:scale-[2.5] "
    );
  };

  const updateComputerChoice = () => {
    setTimeout(() => {
      const computerChoice = generateComputerChoice();
      setComputerChoice(computerChoice);
      setComputerButtonStyle(
        "translate-x-16 sm:translate-y-3/4 sm:translate-x-52 sm:scale-[1.5] lg:translate-x-72 lg:translate-y-full lg:scale-[2.5]"
      );
      if (computerChoice === userChoice) {
        const selectedButton = buttons.find(
          (button) => button.type === computerChoice
        );
        setSecondButton(selectedButton);
      }
    }, 1000);
  };

  const updateGameResult = () => {
    setTimeout(() => {
      const result = generateGameResult(userChoice, computerChoice);
      setResult(result);
      setStatus("over");
    }, 1000);
  };

  const updateGameScore = () => {
    setTimeout(() => {
      if (result === "win") {
        setScore((prev) => prev + 1);
      }
    }, 1000);
  };

  const resetBoard = () => {
    setStatus("idle");
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setUserButtonStyle("");
    setComputerButtonStyle("");
    setSecondButton(undefined);
  };

  const context: GameContextProps = {
    status,
    userChoice,
    computerChoice,
    result,
    score,
    userButtonStyle,
    computerButtonStyle,
    secondButton,
    startGame,
    updateComputerChoice,
    updateGameResult,
    updateGameScore,
    resetBoard,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
};
export default GameProvider;
