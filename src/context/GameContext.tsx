import { createContext, ReactNode, useState } from "react";
import { GameChoices, GameResult, GameStatus } from "../types/types";
import { generateComputerChoice } from "../utils/utils";

export interface GameContextProps {
  status: GameStatus;
  userChoice: GameChoices | null;
  computerChoice: GameChoices | null;
  result: GameResult;
  score: number;
  userButtonStyle: string;
  computerButtonStyle: string;
  startGame: (choice: GameChoices) => void;
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

  const startGame = (choice: GameChoices) => {
    setStatus("active");
    setUserChoice(choice);
    setUserButtonStyle(
      "-translate-x-16 sm:-translate-x-52 sm:translate-y-3/4 sm:scale-[1.5] lg:-translate-x-80 lg:translate-y-full lg:scale-[2.5] "
    );
    setTimeout(() => {
      updateComputerChoice();
    }, 2000);
    // setTimeout(() => {
    //   const computerChoice = generateComputerChoice();
    //   const button = buttons.find((button) => button.type === computerChoice);
    //   setGameInfo({
    //     ...gameInfo,
    //     status: "active",
    //     userChoice: type,
    //     computerChoice: computerChoice,
    //   });
    //   if (button) {
    //     setSelectedButton(button);
    //   }
    // }, 3000);
  };

  const updateComputerChoice = () => {
    const computerChoice = generateComputerChoice();
    setComputerChoice(computerChoice);
    setComputerButtonStyle(
      "translate-x-16 sm:translate-y-3/4 sm:translate-x-52 sm:scale-[1.5] lg:translate-x-72 lg:translate-y-full lg:scale-[2.5] "
    );
  };
  const context: GameContextProps = {
    status,
    userChoice,
    computerChoice,
    result,
    score,
    userButtonStyle,
    computerButtonStyle,
    startGame,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
};
export default GameProvider;
