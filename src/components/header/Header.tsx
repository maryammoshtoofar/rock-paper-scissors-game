import useGame from "../../hooks/useGame";
import Score from "../score/Score";
import ShapeNames from "./shape-names/ShapeNames";
import Wrapper from "./wrapper/Wrapper";

const Header = () => {
  const { score } = useGame();
  return (
    <Wrapper>
      <ShapeNames />
      <Score score={score} />
    </Wrapper>
  );
};

export default Header;
