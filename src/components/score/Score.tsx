import ScoreTitle from "./score-title/ScoreTitle";
import ScoreNumber from "./score-number/ScoreNumber";
import ScoreContainer from "./score-container/ScoreContainer";


type Props = { score: number };

const Score = ({ score }: Props) => {

  return (
    <ScoreContainer>
      <ScoreTitle />
      <ScoreNumber>{score}</ScoreNumber>
    </ScoreContainer>
  );
};

export default Score;
