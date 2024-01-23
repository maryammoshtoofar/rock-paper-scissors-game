import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { GameChoices } from "../types/types";

type GameInfo = {
  status: "idle" | "active" | "over";
  userChoice: GameChoices | null;
  computerChoice: GameChoices | null;
  result: "win" | "lose" | "tie" | null;
  score: number;
  selectedButtonStyle: string;
};
interface GameContextType {
  gameInfo: GameInfo;
  setGameInfo: Dispatch<SetStateAction<GameInfo>>;
}

export const GameContext = createContext<GameContextType>({
  gameInfo: {
    status: "idle",
    userChoice: null,
    computerChoice: null,
    result: null,
    score: 0,
    selectedButtonStyle: "",
  },
  setGameInfo: () => {},
});
type Props = {
  children: ReactNode;
};
export const GameProvider = ({ children }: Props) => {
  const [gameInfo, setGameInfo] = useState<GameInfo>({
    status: "idle",
    userChoice: null,
    computerChoice: null,
    result: null,
    score: 0,
    selectedButtonStyle: "",
  });

  return (
    <GameContext.Provider value={{ gameInfo, setGameInfo }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameProvider;
