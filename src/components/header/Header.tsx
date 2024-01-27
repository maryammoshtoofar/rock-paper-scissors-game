import { useEffect } from "react";
import useGame from "../../hooks/useGame";
import Score from "../score/Score";
import ShapeNames from "./shape-names/ShapeNames";
import Wrapper from "./wrapper/Wrapper";

const Header = () => {
  const {
    score,
    updateGameScore,
    result,
    userChoice,
    computerChoice,
    updateComputerChoice,
    updateGameResult,
  } = useGame();


  useEffect(() => {
    if (userChoice && !computerChoice) updateComputerChoice();
  }, [userChoice]);

  useEffect(() => {
    if (userChoice && computerChoice) updateGameResult();
  }, [computerChoice]);

  useEffect(() => {
    if (result) updateGameScore();
  }, [result]);

  return (
    <Wrapper>
      <ShapeNames />
      <Score score={score} />
    </Wrapper>
  );
};

export default Header;
