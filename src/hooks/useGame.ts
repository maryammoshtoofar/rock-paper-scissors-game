import { useContext } from "react";
import { GameContext, GameContextProps } from "../context/GameContext";

const useGame = (): GameContextProps => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

export default useGame;
