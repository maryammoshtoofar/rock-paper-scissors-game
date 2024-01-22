import Score from "../score/Score";
import ShapeNames from "./shape-names/ShapeNames";
import Wrapper from "./wrapper/Wrapper";

const Header = () => {
  return (
    <Wrapper>
      <ShapeNames />
      <Score score={12} />
    </Wrapper>
  );
};

export default Header;
