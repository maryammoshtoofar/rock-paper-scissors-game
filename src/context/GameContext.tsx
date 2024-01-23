import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { GameChoices } from "../types/types";
import { generateComputerChoice, generateGameResult, generateScore } from "../utils/utils";

type GameInfo = {
  userChoice: GameChoices | null;
  computerChoice: GameChoices | null;
  result: "win" | "lose" | "tie" | null;
  score: number;
};
interface GameContextType {
  gameInfo: GameInfo;
  setGameInfo: Dispatch<SetStateAction<GameInfo>>;

}

export const GameContext = createContext<GameContextType>({
  gameInfo: {
    userChoice: null,
    computerChoice: null,
    result: null,
    score: 0,
  },
  setGameInfo: () => {},
});
type Props = {
  children: ReactNode;
};
export const GameProvider = ({ children }: Props) => {
  const [gameInfo, setGameInfo] = useState<GameInfo>({
    userChoice: null,
    computerChoice: null,
    result: null,
    score: 0,
  });

  return (
    <GameContext.Provider value={{ gameInfo, setGameInfo }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameProvider;
