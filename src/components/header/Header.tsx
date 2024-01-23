import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Score from "../score/Score";
import ShapeNames from "./shape-names/ShapeNames";
import Wrapper from "./wrapper/Wrapper";

const Header = () => {
  const { gameInfo } = useContext(GameContext);
  return (
    <Wrapper>
      <ShapeNames />
      <Score score={gameInfo.score} />
    </Wrapper>
  );
};

export default Header;
